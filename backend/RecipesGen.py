from email.mime import image
from urllib import request
import openai
from flask import Flask, Response, request
import json
from flask_cors import CORS
import replicate

replicate.Client(api_token="1cc1a3f2abbd51c6bbdeadb1fc119bd06f2dd9c5")
app = Flask(__name__)

CORS(app)


@app.route("/getRecipe", methods = ["GET"] )
def getRecipe():

    openai.api_key = "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"
    engines = openai.Engine.list()

    args = request.args.to_dict(flat=False)

    ingredients_list = args['i']

    
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Write a title and recipe based on these ingredients:\n" + "\n".join(ingredients_list),
        temperature=.95,
        max_tokens=240,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )
    # response.headers['Access-Control-Allow-Origin'] = '*'

    try:
        with open('response.json', "a") as fp:
            fp.write(json.dumps(response))
            fp.write("\n")
    except:
        print("Couldnt write to file")

    return response
    


@app.route("/getImage", methods=["GET"])
def getImage():


    args = request.args.to_dict(flat=False)
    image_prompt = args['prompt'][0]
    print(image_prompt)

    model = replicate.models.get("stability-ai/stable-diffusion")
    output = Response(model.predict(prompt= image_prompt))
    # output = "htoutps://replicate.delivery/pbxt/koGiXKGfIDTTPiZlyoojzE4iykjRPnAlhEXhghRWw4VleT1PA/out-0.png"
    # output.headers['Access-Control-Allow-Origin'] = '*'
    return output


if __name__ == '__main__':
    port = 8000 #the custom port you want
    app.run(host='0.0.0.0', port=port, debug=True)

@app.after_request
def add_header(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    return response