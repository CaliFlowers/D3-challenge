# D3-Data-journalism

# D3

Data-Driven Documents or D3 is a Javascript Library that enables the manipulation of HTML elements using Javascript.  D3 can be used to create new HTML elements, or append new features to existing elements; or to transform existing elements into charts, graphs, image galaries, or selections. Another feature of D# s its ability to pass data into Javascript and bind it to HTML elements through promise chain functions for JSON and CSV sources. The data is imported from these sources then passed to Javascript and bound to HTML elements to create Scalable Vector Graphics (SVGs). 

## SVG

Scalable Vector Graphics are a type of data visualization in Javascript made possible by the D3 library. While Plotly allows a data analyst to pass data through a function and render pre-defined graphs with if provided with appropriate arguments; D3 can create an SVG element and pass data to it; it can also add new HTML elements within an SVG element using data as attributes, text, or features which allows a savvy programmer to create unique visualizations with their data where imagination is the limit. 

## Project Description
This project is fairly straightforward in that it merely entils the creation of a simple labeled scatterplot using state-level data on health-risk indices. This data is passed into Javscript through a CSV-promise chain in D3. The promise chain extracts 50 data objects with several entries. For the purposes of this project, the entries of interest were access to healthcare, and poverty rate at the state level. D3 targets the html file; then selects an HTML div tag intended to cntain a chart. Into this div tag, D3 appends an SVG element. The project then uses D3 to do the following steps: 

1. D3 specifies the size of the SVG element. 
2. D3 creates a chart inside the SVG element. 
3. D3 extracts the entries of interest and passes them to Scaling functions to append axes to the SVG chart. 
4. D3 appends circles for each object (state) to the SVG element using the entries of interest as x and y coordinates. 
5. D3 extracts the state abbreviation entries from the objects and appends them as text to the chart with the targeted entries serving as x and y coordinates
6. D3 renders all these steps together which, creates a scatterplot
