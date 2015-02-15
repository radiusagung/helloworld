(function (global, $) {
    var pieChart = null,
        app = global.app = global.app || {};


    app.pieChart_Projects = {
        createPieChart: function () {
            app.pieChart_Projects.drawPieChart();
            app.pieChart_Projects.bindResizeEvent();
        },

        drawPieChart: function () {
            var $pieChart;

            if (pieChart !== null) {
                pieChart.destroy();
            }

            $pieChart = $("#pie-chart_Projects").empty();

            pieChart = $pieChart.kendoChart({
                theme: "silver",
                renderAs: "svg",
                title: {
                    position: "top",
                    text: "Februari 2015 (Jam Kerja Tercatat)"
                },
                legend: {
                    position: "bottom"
                },
                chartArea: {
                    background: "",
                    width: $(window).width(),
                    // margin: app.emToPx(1)
                },
                series: [
                    {
                        type: "pie",
                        startAngle: 90,
                        data: [
                            {
                                category: "Maju Jaya Makmur 16",
                                value: 16
                            }, {
                                category: "Dika Mandiri 24",
                                value: 24
                            }, {
                                category: "Muria Agung 24",
                                value: 24
                            }, {
                                category: "Grand Kartech 24",
                                value: 24
                            }, {
                                category: "Marco Persada 284",
                                value: 284
                            }
                        ]
                    }
                ],
                tooltip: {
                    visible: true,
                    format: "{0}%"
                }
            }).data("kendoChart");
        },

        bindResizeEvent: function () {
            //as the dataviz-s are complex elements they need redrow after window resize 
            //in order to position themselve on the right place and right size
            $(window).on("resize.pieChart_Projects", $.proxy(app.pieChart_Projects.drawPieChart, app.pieChart_Projects));
        },

        unbindResizeEvent: function () {
            //unbind the "resize event" to prevent redudntant calculations when the tab is not active
            $(window).off("resize.pieChart_Projects");
        }
    };
    
        app.pieChart_Sales = {
        createPieChart: function () {
            app.pieChart_Sales.drawPieChart();
            app.pieChart_Sales.bindResizeEvent();
        },

        drawPieChart: function () {
            var $pieChart;

            if (pieChart !== null) {
                pieChart.destroy();
            }

            $pieChart = $("#pie-chart_Sales").empty();

            pieChart = $pieChart.kendoChart({
                theme: "silver",
                renderAs: "svg",
                title: {
                    position: "top",
                    text: "Maret 2015"
                },
                legend: {
                    position: "bottom"
                },
                chartArea: {
                    background: "",
                    width: $(window).width(),
                    // margin: app.emToPx(1)
                },
                series: [
                    {
                        type: "pie",
                        startAngle: 150,
                        data: [
                            {
                                category: "Asia",
                                value: 53.8
                            }, {
                                category: "Europe",
                                value: 16.1
                            }, {
                                category: "Latin America",
                                value: 11.3
                            }, {
                                category: "Africa",
                                value: 9.6
                            }, {
                                category: "Middle East",
                                value: 5.2
                            }, {
                                category: "North America",
                                value: 3.6
                            }
                        ]
                    }
                ],
                tooltip: {
                    visible: true,
                    format: "{0}%"
                }
            }).data("kendoChart");
        },

        bindResizeEvent: function () {
            //as the dataviz-s are complex elements they need redrow after window resize 
            //in order to position themselve on the right place and right size
            $(window).on("resize.pieChart_Sales", $.proxy(app.pieChart_Sales.drawPieChart, app.pieChart_Sales));
        },

        unbindResizeEvent: function () {
            //unbind the "resize event" to prevent redudntant calculations when the tab is not active
            $(window).off("resize.pieChart_Sales");
        }
    };
})(window, jQuery);