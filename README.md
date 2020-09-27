# display-gh-info
An application (that only works locally so far) that displays GitHub user information. Created this repository as the solution to a technical interview test in a recruiting process.

## Time needed
Given expected time for this task was 4-8 hours

To implement my two PRs, I needed (tracked via ManicTime):
- Implement Backend: 110 min (see PR)
- Implement Frontend: 240 min (see PR)

Note: The time above does not include breaks


I have to admit that it took me some more time to read through the task & understand the problem, also it does not include writing this readme => so I probably finished more at the end of the 4-8hr window given.

## Getting started
1. Clone [repo](https://github.com/p6l-richard/display-gh-info)
2. Create backend/creds.py file storing the GitHub credentials 
```python 
username = "your_username"
password = "your_pw"
```
3. Create Python virtual environment (see [docs for help](https://docs.python.org/3/library/venv.html#creating-virtual-environments))
4. Activate virtual env `$ source venv/bin/activate` or `.\env\Scripts\Activate.ps1` on Windows
5. Install dependencies
    - backend: 
        1. cd into /backend
        2. pip install -r requirements.txt
    - frontend:
        1. cd into /frontend
        2. `npm install`
6. start api
    - cd into /backend
    - export variables `$ export FLASK_APP=api` or `$env:FLASK_APP = "api.py"` on Windows PowerShell
    - flask run --reload
7. start frontend
    - cd into /frontend
    - `npm start`
