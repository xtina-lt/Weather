######################################################
#                  import Flask                      #        
#                  '@' decorator                     #
#                associated funcion                  #
#              if __name__=="__main__":              #
#                app.run(debug=True)                 #
#                   -XTINA.CODES-                    #
#           render_template('.html') METHOD          #
######################################################

from doctest import OutputChecker
from flask import Flask, render_template
# import flask to initiate a new Flask object
# render template to use template folder

app = Flask(__name__)
app.secret_key = 'XTINA.CODES'


@app.route('/')        
def hello_world():
    return render_template('index.html')

@app.route("/norfolk")
def burbank():
    return render_template('output.html', name = "norfolk")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('catch_all.html') 

if __name__ == "__main__":
    app.run(debug=True)




