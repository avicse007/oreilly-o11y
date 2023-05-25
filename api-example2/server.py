from opentelemetry.instrumentation.flask import FlaskInstrumentor
from flask import Flask
import requests
app = Flask(__name__)
FlaskInstrumentor().instrument_app(app)

from tracing import initialize_tracer, get_tracer

initialize_tracer()
tracer = get_tracer("service-name-here")

# Configuration
app.config['DEBUG'] = True  # Enable debug mode (auto-reloads on code changes)

# Routes
@app.route('/api/hello', methods=['GET'])
def hello():
    response = requests.get('http://localhost:8080')
    if response.status_code == 200:
        return f"Hello, World! Response from port 3000: {response.text}"
    else:
        return 'Hello, World! Failed to retrieve response from port 3000.'

# Routes
@app.route('/', methods=['GET'])
def helloworld():
    return f"Hello, World!"
    
if __name__ == '__main__':
    app.run(port=5050)
