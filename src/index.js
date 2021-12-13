import React, { useState, useRef, useEffect } from 'react'

type S2MapProps = {
  style: Object,
  opts: Object,
  apiKey: string,
  ready: Function,
  click: Function,
  info: Function,
  mouseenter: Function,
  mouseleave: Function
}

export default function S2Map (props: S2MapProps) {
  const s2map = useRef()
  const s2mapContainer = useRef()
  const [height, setHeight] = useState(0)

  function resize () { setHeight(window.innerHeight) }

  useEffect(() => {
    // if already built, return
    if (s2map.current) return
    // prep the canvas
    prepCanvas(s2mapContainer.current, s2map, props)
    // if fullscreen mode, adjust for phones
    if (props.fullscreen) {
      window.addEventListener('resize', resize, false, 0, true)
      window.addEventListener('orientationchange', resize, false, 0, true)
      setHeight(window.innerHeight)
    }
    // componentWillUnmount equivalent:
    return () => {
      if (s2map.current) { s2map.current.delete(); s2map.current = null }
      if (props.fullscreen) {
        window.removeEventListener('resize', resize, false, 0, true)
        window.removeEventListener('orientationchange', resize, false, 0, true)
      }
    } // eslint-disable-next-line
  }, [])

  return <div style={props.fullscreen ? { height } : {}} ref={node => { s2mapContainer.current = node }} />
}

function prepCanvas (container, s2map, props) {
  // pull in properties
  let { style, opts, apiKey, ready, pos, click, info, mouseenter, mouseleave, screenshot } = props
  if (!opts) opts = {}
  // don't bother reloading without a style or container
  if (!style || !container) return

  // build new map
  s2map.current = new window.S2Map({
    ...opts,
    style,
    apiKey,
    container,
    ready
  })
  // create the appropriate even listeners
  if (click) {
    s2map.current.addEventListener('click', (data) => {
      const { feature, lon, lat } = data.detail
      click(feature, lon, lat, s2map.current)
    })
  }
  if (info) {
    s2map.current.addEventListener('info', (data) => {
      info(data.detail, s2map.current)
    })
  }
  if (mouseenter) {
    s2map.current.addEventListener('mouseenter', (data) => {
      mouseenter(data.detail, s2map.current)
    })
  }
  if (mouseleave) {
    s2map.current.addEventListener('mouseleave', (data) => {
      mouseleave(data.detail, s2map.current)
    })
  }
  if (pos) {
    s2map.current.addEventListener('pos', (data) => {
      pos(data.detail, s2map.current)
    })
  }
  if (screenshot) {
    s2map.current.addEventListener('screenshot', (data) => {
      pos(data.detail, s2map.current)
    })
  }
}
