import React, { useLayoutEffect, useRef } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

import Image2011 from 'assets/2011.jpg'

import classes from './index.module.scss'

/* 
2011	215	259	55	149	38	39	755	392200
2012	419	588	106	261	77	75	1526	396771
2013	632	911	153	366	111	98	2271	402662
2014	868	1182	187	476	142	135	2990	407674
2015	1025	1505	216	588	194	185	3713	413881
2016	1236	1934	272	712	273	265	4692	421774
2017	1458	2313	328	879	328	320	5626	428721
2018	1645	2670	434	1018	391	368	6526	436257
2019	1951	3091	537	1201	449	417	7646	446386
2020	2162	3454	1056	1369	499	458	8998	457237
*/

const data = [
  {
    year: new Date('2011'),
    business: 215,
    farmers: 259,
    government: 55,
    landGrabbers: 149,
    loggers: 38,
    mining: 39,
    landConflictCumulative: 755,
    deforestationCumulative: 392200,
  },
  {
    year: new Date('2012'),
    business: 419,
    farmers: 588,
    government: 106,
    landGrabbers: 261,
    loggers: 77,
    mining: 75,
    landConflictCumulative: 1526,
    deforestationCumulative: 396771,
  },
  {
    year: new Date('2013'),
    business: 632,
    farmers: 911,
    government: 153,
    landGrabbers: 366,
    loggers: 111,
    mining: 98,
    landConflictCumulative: 2271,
    deforestationCumulative: 402662,
  },
  {
    year: new Date('2014'),
    business: 868,
    farmers: 1182,
    government: 187,
    landGrabbers: 476,
    loggers: 142,
    mining: 135,
    landConflictCumulative: 2990,
    deforestationCumulative: 407674,
  },
  {
    year: new Date('2015'),
    business: 1025,
    farmers: 1505,
    government: 216,
    landGrabbers: 588,
    loggers: 194,
    mining: 185,
    landConflictCumulative: 3713,
    deforestationCumulative: 413881,
  },
  {
    year: new Date('2016'),
    business: 1236,
    farmers: 1934,
    government: 272,
    landGrabbers: 712,
    loggers: 273,
    mining: 265,
    landConflictCumulative: 4692,
    deforestationCumulative: 421774,
  },
  {
    year: new Date('2017'),
    business: 1458,
    farmers: 2313,
    government: 328,
    landGrabbers: 879,
    loggers: 328,
    mining: 320,
    landConflictCumulative: 5626,
    deforestationCumulative: 428721,
  },
  {
    year: new Date('2018'),
    business: 1645,
    farmers: 2670,
    government: 434,
    landGrabbers: 1018,
    loggers: 391,
    mining: 368,
    landConflictCumulative: 6526,
    deforestationCumulative: 436257,
  },
  {
    year: new Date('2019'),
    business: 1951,
    farmers: 3091,
    government: 537,
    landGrabbers: 1201,
    loggers: 449,
    mining: 417,
    landConflictCumulative: 7646,
    deforestationCumulative: 446386,
  },
  {
    year: new Date('2020'),
    business: 2162,
    farmers: 3454,
    government: 1056,
    landGrabbers: 1369,
    loggers: 499,
    mining: 458,
    landConflictCumulative: 8998,
    deforestationCumulative: 457237,
  },
]

export const Home: React.FunctionComponent = () => {
  const chart = useRef()

  useLayoutEffect(() => {
    const x = am4core.create('chartdiv', am4charts.XYChart)
    x.logo.visible = false

    // x.paddingTop = 0
    x.paddingRight = 0
    x.paddingLeft = 0
    x.paddingBottom = 0

    x.data = data

    const dateAxis = x.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0

    const valueAxis = x.yAxes.push(new am4charts.ValueAxis())
    // @ts-ignore
    valueAxis.tooltip.disabled = true
    valueAxis.renderer.minWidth = 35

    const createSeries = (field: string) => {
      const series = x.series.push(new am4charts.LineSeries())
      series.dataFields.dateX = 'year'
      series.dataFields.valueY = field
      series.tooltipText = '{valueY.value}'
    }

    createSeries('business')
    createSeries('farmers')
    createSeries('government')
    createSeries('landGrabbers')
    createSeries('loggers')
    createSeries('mining')

    x.cursor = new am4charts.XYCursor()

    // @ts-ignore
    chart.current = x

    return () => {
      x.dispose()
    }
  }, [])

  return (
    <main className={classes.layout}>
      <h1 className={classes.title}>The network and the policy</h1>
      <div className={classes.grid}>
        <aside className={classes.aside}>
          <div className={classes.year}>
            <div className={classes.year__date}>2011</div>
            <div className={classes.year__content}>
              <div>
                <p>PEC 76/2011, Author - Blairo Maggi (PR-MT)</p>
                <p>
                  Amendment to articles 176 and 231 of the Federal Constitution
                  to give congress the decision making power to explore water
                  resources on indigenous lands. The constitutional amendment
                  bill proposes to offer indigenous peoples “participation in
                  the exploitation of the potential of hydraulic energy” on
                  their lands, as well as “in the mining of mineral resources”.
                </p>
              </div>
              <img src={Image2011} alt="" width="100%" />
              <p>
                In the early morning of 18 November 2011, some 40 gunmen arrived
                at a Guarani-Kaiowá indigenous encampment in Mato Grosso do Sul
                State, and shot tribal leader Nísio Gomes before dragging him
                away. Gomes’ body and three indigenous children abducted during
                the attack have not been seen since. A private security company,
                Gaspem Segurança, was implicated in the death of Gomes and
                another indigenous leader, Dorvalino Rocha. The same
                organization was found to have been responsible for burning
                indigenous houses, and kidnapping and beating indigenous people
                from 2009 to 2011.
              </p>
            </div>
          </div>
        </aside>

        <section className={classes.chart}>
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
          <div id="chartdiv" style={{ width: '100%', height: '500px' }} />
        </section>
      </div>
    </main>
  )
}
