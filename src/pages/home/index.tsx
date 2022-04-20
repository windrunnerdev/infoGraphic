import { useEffect, useLayoutEffect, useRef } from 'react';
import { data } from './data';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

import classes from './index.module.scss';
import { contents } from './contents';

gsap.registerPlugin(ScrollTrigger, Draggable);

export const Home: React.FunctionComponent = () => {
  const chart = useRef();

  useLayoutEffect(() => {
    const x = am4core.create('chartdiv', am4charts.XYChart);
    x.logo.visible = false;

    // x.paddingTop = 0
    x.paddingRight = 0;
    x.paddingLeft = 0;
    x.paddingBottom = 0;

    x.data = data;

    const dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    // @ts-ignore
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const createSeries = (field: string) => {
      const series = x.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = 'year';
      series.dataFields.valueY = field;
      series.tooltipText = '{valueY.value}';
    };

    createSeries('business');
    createSeries('farmers');
    createSeries('government');
    createSeries('landGrabbers');
    createSeries('loggers');
    createSeries('mining');

    x.cursor = new am4charts.XYCursor();

    // @ts-ignore
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  useLayoutEffect(() => {
    const scrollContainer = document.querySelector('#container');
    const scrollTween = gsap.to('#mask', {
      right: '90%',
      ease: 'none',
    });
    const verticalScroll = ScrollTrigger.create({
      animation: scrollTween,
      trigger: scrollContainer,
      scrub: true,
      start: 'top top',
      end: 'bottom bottom',
      invalidateOnRefresh: true,
    });

    Draggable.create('#mask', {
      type: 'x',
      bounds: '#chart-ghost',
      edgeResistance: 0.9,
      onPress() {
        this.startScroll = verticalScroll.scroll();
      },
      onDrag(x) {
        const contentBoxHeight = document.querySelector('#box')?.clientHeight!;
        console.log('==>contentBox ==>', contentBoxHeight);

        const chartBoxWidth =
          document.querySelector('#chart-ghost')?.clientWidth!;
        console.log('==> chartBoxWidth ==>', chartBoxWidth);

        const distance = this.endX - this.startX;
        console.log('==> distance ==>', distance);

        const verticalScrollAmount =
          (contentBoxHeight * distance) / chartBoxWidth;
        console.log('==> verticalScrollAmount ==>', verticalScrollAmount);

        verticalScroll.scroll(this.startScroll + verticalScrollAmount * 20);
      },
    });
    // const scrollContainer = document.querySelector('#container')!;
    // gsap.to('#mask', {
    //   scrollTrigger: {
    //     trigger: scrollContainer,
    //     scrub: true,
    //     start: 'top top',
    //     // end: 'bottom bottom',
    //     // @ts-ignore
    //     end: () => '+=' + scrollContainer.offsetHeight!,
    //     invalidateOnRefresh: true,
    //   },
    //   left: '90%',
    //   ease: 'none',
    // });
  }, []);
  return (
    <main className={classes.layout}>
      <h1 className={classes.title}>The network and the policy</h1>
      <div className={classes.grid}>
        <aside className={classes.aside} id='container'>
          {contents.map((cn, idx) => (
            <div key={cn.year} className={classes.year} id='box'>
              <div className={classes.year__date}>{cn.year}</div>
              <div className={classes.year__content}>
                <div>
                  {cn.boxContent.header && <p>{cn.boxContent.header}</p>}
                  {cn.boxContent.body && <p>{cn.boxContent.body}</p>}
                </div>
                {cn.imgUrl && <img src={cn.imgUrl} alt='' width='100%' />}
                {cn.mainContent && <p>{cn.mainContent}</p>}
              </div>
            </div>
          ))}
        </aside>
        <section className={classes.chart} id='chart'>
          <div className={classes['chart-header']}>
            <div className={classes['chart-header__left']}>
              <span>deforestation cumulative</span>
              <span>432,000 km</span>
            </div>
            <div className={classes['chart-header__right']}>
              <span>land conflict cumulative</span>
              <span>432,000 km</span>
            </div>
          </div>
          <div style={{ width: '100%', height: '500px', position: 'relative' }}>
            <div className={classes['chart-ghost']} id='chart-ghost' />
            <div className={classes['chart-mask']} id='mask'></div>
            <div id='chartdiv' style={{ width: '100%', height: '500px' }} />
          </div>
        </section>
      </div>
    </main>
  );
};
