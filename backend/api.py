from flask import Flask, jsonify
from github import Github
import traceback
import creds

g = Github(creds.username, creds.password)


def create_app(test_config=None):
    app = Flask(__name__)

    @app.route('/github-user-profile/users/<string:username>')
    def get_user_profile(username):
        try:
            user_profile = g.get_user(username)
            # flask wraps dicts automatically into successful response
            return user_profile._rawData
        except Exception as e:
            print('Something went wrong because of:', e)
            print(traceback.print_exc())
            return {"info": "consult server log to debug"}, 500

    @app.route('/github-followers/users/<string:username>')
    def get_followers_for_user(username):
        try:
            fetched_followers = g.get_user(username).get_followers()
            followers = [follower._rawData for follower in fetched_followers]
            return jsonify({"followers": followers})
        except Exception as e:
            print('Something went wrong because of:', e)
            print(traceback.print_exc())
            return {"info": "consult server log to debug"}, 500

    @app.route('/github-followers/users/<string:username>/groups/<string:follower_group>')
    def get_followers_for_user_by_group(username, follower_group):
        if follower_group != 'mutual' and follower_group != 'oneway':
            return {"info": "follower group must be either 'mutual' or 'oneway'"}, 400
        user = g.get_user(username)
        if not user:
            return {"info": "could not fetch user: " + username}, 400

        is_mutual = True
        if follower_group == 'oneway':
            is_mutual = False

        fetched_followers = user.get_followers()
        followers = [
            follower._rawData for follower in fetched_followers
            if user.has_in_following(follower) == is_mutual]
        return jsonify({follower_group + "_followers": followers})

    return app
