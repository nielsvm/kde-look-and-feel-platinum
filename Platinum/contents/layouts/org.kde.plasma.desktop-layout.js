var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.potd"
                },
                "/ConfigDialog": {
                    "DialogHeight": "360",
                    "DialogWidth": "480"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topleft",
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.potd/General": {
                    "Provider": "flickr"
                }
            },
            "wallpaperPlugin": "org.kde.potd"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "360",
                    "DialogWidth": "480"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "showToolbox": "false"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "3",
                    "wallpaperplugin": "org.kde.potd"
                },
                "/ConfigDialog": {
                    "DialogHeight": "603",
                    "DialogWidth": "852"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topleft",
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "255,0,127"
                },
                "/Wallpaper/org.kde.potd/General": {
                    "FillMode": "2",
                    "Provider": "bing"
                }
            },
            "wallpaperPlugin": "org.kde.potd"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "5",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "480",
                    "DialogWidth": "640"
                },
                "/Configuration": {
                    "PreloadWeight": "2"
                },
                "/General": {
                    "showToolbox": "false"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
                {
                    "config": {
                    },
                    "geometry.height": 5,
                    "geometry.width": 6,
                    "geometry.x": 79,
                    "geometry.y": 40,
                    "plugin": "org.kde.plasma.trash",
                    "title": "Trashcan"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.color"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "positions": "4,13,desktop:/org.kde.kmail2.desktop,3,12,desktop:/firefox.desktop,2,12,desktop:/org.kde.kinfocenter.desktop,1,12",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "156,156,206"
                },
                "/Wallpaper/org.kde.potd/General": {
                    "FillMode": "2",
                    "Provider": "bing"
                }
            },
            "wallpaperPlugin": "org.kde.color"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
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
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/General": {
                            "length": "1652"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Appearance": {
                            "boldText": "true",
                            "pin": "true"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "505",
                            "DialogWidth": "488"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        }
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
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.5,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 85.375,
            "minimumLength": 85.375,
            "offset": 0
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "615",
                            "DialogWidth": "476"
                        },
                        "/Configuration/General": {
                            "showOnlyCurrentDesktop": "true",
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "75",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "618",
                            "DialogWidth": "514"
                        },
                        "/Configuration/General": {
                            "showOnlyCurrentDesktop": "true",
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "75",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "650",
                            "DialogWidth": "640"
                        },
                        "/Configuration/General": {
                            "showOnlyCurrentDesktop": "true",
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "3",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "82",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "2"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/Configuration/General": {
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "5",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "82",
                    "DialogWidth": "1280"
                },
                "/Configuration": {
                    "PreloadWeight": "2"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/Configuration/General": {
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
            "height": 1.875,
            "hiding": "windowscover",
            "location": "bottom",
            "maximumLength": 85.375,
            "minimumLength": 5.25,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
