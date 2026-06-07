var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.trash",
                    "title": "Trash"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1200": "Applet-58:1776,1040,96,96,0;",
                    "ItemGeometriesHorizontal": "Applet-58:1776,1040,96,96,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.color"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "630"
                },
                "/General": {
                    "ToolBoxButtonState": "topleft",
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "99,97,159"
                },
                "/Wallpaper/org.kde.potd/General": {
                    "Provider": "flickr"
                }
            },
            "wallpaperPlugin": "org.kde.color"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "customButtonImage": "kde",
                            "favoritesPortedToKAstats": "true",
                            "hiddenApplications": "Grand Theft Auto 2.desktop",
                            "limitDepth": "true",
                            "showRecentApps": "false",
                            "showRecentDocs": "false",
                            "useCustomButtonImage": "true"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/General": {
                            "length": "1652"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        },
                        "/Appearance": {
                            "boldText": "true",
                            "pin": "true"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "505",
                            "DialogWidth": "488"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "68",
                    "DialogWidth": "1920"
                }
            },
            "height": 1.6875,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 96,
            "minimumLength": 96,
            "offset": 0
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/General": {
                            "groupingAppIdBlacklist": "org.kde.dolphin.desktop",
                            "groupingLauncherUrlBlacklist": "applications:org.kde.dolphin.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "67",
                    "DialogWidth": "1366"
                }
            },
            "height": 2.0625,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 96,
            "minimumLength": 5.875,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
