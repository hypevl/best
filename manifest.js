{
    "manifest_version": 3,
    "name": "CSGO Markup Finder",
    "version": "1.0",
    "description": "Find the lowest markup percentage and forward it.",
    "permissions": ["activeTab", "scripting"],
    "background": {
      "service_worker": "background.js"
    },
    "action": {
      "default_popup": "popup.html",
      "default_icon": {
        "16": "icon16.png",
        "48": "icon48.png",
        "128": "icon128.png"
      }
    },
    "content_scripts": [
      {
        "matches": ["https://www.csgoroll.com/withdraw/csgo/p2p"],
        "js": ["content.js"]
      }
    ]
  }
