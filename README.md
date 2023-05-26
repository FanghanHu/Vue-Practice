# vue-practice

This project contains a mini demo of dynamically loading components from a configuration file.

This allows modifications of a webpage without modifying the page's source code.

## In this demo
We have two components
-   blue-text
-   red-text

the original web app loads red-text twice, one of them is loaded with the mod loader.
The mod loader looks into component-replacement-map.json for a replacement component and loads the replacement dynamically.

because we have this entry ```"/src/components/red-text.vue": "/src/components/blue-text.vue"``` in the JSON file, the web app displays the 2nd text in blue.