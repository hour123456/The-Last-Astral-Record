# -*- coding: utf-8 -*-
"""
One-Click Local Server & Browser Launcher for
《창백한 별의 레퀴엠 : 제0시계탑의 관측자》
"""

import os
import webbrowser
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 8765

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    url = f"http://127.0.0.1:{PORT}/index.html"
    print(f"============================================================")
    print(f" 《창백한 별의 레퀴엠 : 제0시계탑의 관측자》")
    print(f" CHRONOS-ARIA Engine Server running at: {url}")
    print(f"============================================================")
    webbrowser.open(url)
    server = HTTPServer(("127.0.0.1", PORT), SimpleHTTPRequestHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
