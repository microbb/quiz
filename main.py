import json
import requests

from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates

from starlette.responses import HTMLResponse
from starlette.staticfiles import StaticFiles

from config import URL

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/{id}", status_code=200, response_class=HTMLResponse)
async def index(request: Request, id: str) -> HTMLResponse:

    # data = read_json()
    data = requests.post(f'{URL}/{id}').json()

    return templates.TemplateResponse(
        request=request,
        name='home.html',
        context={'data': data}
    )



# def read_json() -> dict:
#     with open('data.json', 'r', encoding='utf-8') as f:
#         return json.load(f)



