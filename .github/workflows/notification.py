import os
import requests
from skpy import Skype

def send_skype_message(username, password, recipient_id, message):
    try:
        skype = Skype(username, password)
        chat = skype.contacts[recipient_id].chat
        chat.sendMsg(message)
        print("Message sent successfully!")
    except Exception as e:
        print(f"Failed to send message: {e}")

def get_github_workflow_status(token, owner, repo, workflow_id):
    url = f"https://api.github.com/repos/{owner}/{repo}/actions/runs/{workflow_id}"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()["conclusion"]

if __name__ == "__main__":
    GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
    GITHUB_OWNER = os.getenv("GITHUB_OWNER")
    GITHUB_REPO = os.getenv("GITHUB_REPO")
    WORKFLOW_ID = os.getenv("WORKFLOW_ID")
    SKYPE_USERNAME = os.getenv("SKYPE_USERNAME")
    SKYPE_PASSWORD = os.getenv("SKYPE_PASSWORD")
    SKYPE_RECIPIENT_ID = os.getenv("SKYPE_RECIPIENT_ID")

    workflow_status = get_github_workflow_status(GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, WORKFLOW_ID)

    if workflow_status == "success":
        message = f"Workflow {WORKFLOW_ID} succeeded."
    elif workflow_status == "failure":
        message = f"Workflow {WORKFLOW_ID} failed."
    else:
        message = f"Workflow {WORKFLOW_ID} has an unknown status: {workflow_status}"

    send_skype_message(SKYPE_USERNAME, SKYPE_PASSWORD, SKYPE_RECIPIENT_ID, message)
