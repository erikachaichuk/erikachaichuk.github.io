const spec1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Carbon per capita by country",
    "title": {
        "text": "Innovation: environmental technology patents",
        "subtitle": "Environmental patents as share national total, G7 | Source: OECD",
        "subtitleFontStyle": "italic",
        "subtitleFontSize": 10,
        "anchor": "start",
        "color": "white",
        "subtitleColor": "white" 
    },
    "data": {
        "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/data/chartENV11.csv"
    },
    "height": 500,
    "width": 700,
    "background": "#1C1F24", 
    "view": {"fill": "#1C1F24", "strokeOpacity": 0},
    "mark": {"type": "line",
        "point": false,
        "interpolate": "linear",
        "color": "white"},
    "encoding": {
        "x": {
            "field": "Time",
            "type": "temporal",
            "title": "",
            "axis": {"grid": false, "labelColor": "white"}
        },
        "y": {
            "field": "Value",
            "type": "quantitative",
            "title": "",
            "axis": {"gridColor": "#333333", "labelColor": "white"},
            "sort": [],
            "scale": {"domain": [0, 18]}
        },
        "color": {
            "field": "Country",
            "title": null,
            "legend": {"symbolOpacity": 1, "orient": "bottom", "direction": "horizontal", "columns": 7, "labelColor": "white"},
            "type": "nominal",
            "sort": [],
            "scale": {"scheme": "yellowgreenblue"}
        },
        "tooltip": [
        {
            "field": "Time",
            "type": "temporal",
            "timeUnit": "year",
            "title": "Year"
        },
        {"field": "Value", "type": "quantitative", "title": "Green patents (%)"},
        {"field": "Country"}
        ]
    },
    "config": {
        "view": {
        "cornerRadius": 10,
        "stroke": "transperent",
        "padding": "config.view",
        "stroke": null, 
        "center": true  
        }
     },
     "autosize": {
        "type": "fit",
        "contains": "padding"
     }
};

export default spec1;
