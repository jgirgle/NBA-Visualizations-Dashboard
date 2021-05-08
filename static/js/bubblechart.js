

$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 /5,
    outerRadius: 600/2 ,
    radiusMin: 10,
    radiusMax: 30,
    intersectDelta: 30,
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "ATL", count: "118"},
        {text: "BOS", count: "132"},
        {text: "BKN", count: "168"},
        {text: "CHA", count: "108"},
        {text: "CHI", count: "128"},
        {text: "CLE", count: "128"},
        {text: "DAL", count: "127"},
        {text: "DEN", count: "129"},
        {text: "DET", count: "116"},
        {text: "GSW", count: "170"},
        {text: "HOU", count: "132"},
        {text: "IND", count: "129"},
        {text: "LAC", count: "138"},
        {text: "LAL", count: "138"},
        {text: "MEM", count: "131"},
        {text: "MIA", count: "134"},
        {text: "MIL", count: "135"},
        {text: "MIN", count: "130"},
        {text: "NOP", count: "133"},
        {text: "NYK", count: "97"},
        {text: "OKC", count: "91"},
        {text: "ORL", count: "121"},
        {text: "PHI", count: "147"},
        {text: "PHO", count: "128"},
        {text: "POR", count: "131"},
        {text: "SAC", count: "105"},
        {text: "SAS", count: "127"},
        {text: "TOR", count: "128"},
        {text: "UTA", count: "136"},
        {text: "WAS", count: "131"},

      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      // {
      //   name: "central-click",
      //   options: {
      //     text: "(See more detail)",
      //     style: {
      //       "font-size": "12px",
      //       "font-style": "italic",
      //       "font-family": "Source Sans Pro, sans-serif",
      //       //"font-weight": "700",
      //       "text-anchor": "middle",
      //       "fill": "white"
      //     },
      //     attr: {dy: "65px"},
      //     centralClick: function() {
      //       alert("Here is more details!!");
      //     }
      //   }
      // },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
});