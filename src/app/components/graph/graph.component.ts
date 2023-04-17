import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { data } from 'src/app/data';
declare var $: any;
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements AfterViewInit {
  @ViewChild('graph', { static: false }) graph;

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    console.log('ngafter');
    console.log(this.graph.nativeElement);

    console.log(data);

    function visualTemplate(options) {
      console.log('visual templete run');
      var dataviz = kendo.dataviz;
      var g = new dataviz.diagram.Group();
      var dataItem = options.dataItem;

      g.append(
        new dataviz.diagram.Rectangle({
          width: 210,
          height: 75,
          stroke: {
            width: 0,
          },
          fill: {
            gradient: {
              type: 'linear',
              stops: [
                {
                  color: dataItem.colorScheme,
                  offset: 0,
                  opacity: 0.5,
                },
                {
                  color: dataItem.colorScheme,
                  offset: 1,
                  opacity: 1,
                },
              ],
            },
          },
        })
      );

      g.append(
        new dataviz.diagram.TextBlock({
          text: dataItem.firstName + ' ' + dataItem.lastName,
          x: 85,
          y: 20,
        })
      );

      g.append(
        new dataviz.diagram.TextBlock({
          text: dataItem.title,
          x: 85,
          y: 40,
        })
      );

      g.append(
        new dataviz.diagram.Image({
          source: '../content/dataviz/diagram/people/' + dataItem.image,
          x: 3,
          y: 3,
          width: 68,
          height: 68,
        })
      );

      return g;
    }

    function createDiagram() {
      console.log('native');
      console.log(this.graph.nativeElement);
      $(this.graph.nativeElement).kendoDiagram({
        dataSource: new kendo.data.HierarchicalDataSource({
          data: data,
          schema: {
            model: {
              children: 'items',
            },
          },
        }),
        layout: {
          type: 'layered',
        },
        shapeDefaults: {
          visual: visualTemplate,
        },
        connectionDefaults: {
          stroke: {
            color: '#979797',
            width: 2,
          },
        },
      });
      console.log('hello');
      console.log('helloooo' + typeof diagram.shapes);
      var diagram = $(this.graph.nativeElement).getKendoDiagram();
      diagram.bringIntoView(diagram.shapes);
    }

    $(document).ready(createDiagram);
  }
}
