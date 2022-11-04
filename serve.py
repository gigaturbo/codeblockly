# https://thealoneprogrammer.github.io/Code-Generation-Using-Blockly/

from bottle import route, run, template, static_file

@route('/')
def index():
    return template('blockly')

@route('/static/<filename:path>')
def send_static(filename):
    return static_file(filename, root='static/')

run(host='localhost', port=8080, reloader=True, debug=True)