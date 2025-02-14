# React Magical Carousel

A infinite carousel component for React

## Installation

```
npm install react-magical-carousel
```

## Example

```tsx
import ReactMagicalCarousel from 'react-magical-carousel'
import leftIcon from './assets/icons/arrow-left.png'
import rightIcon from './assets/icons/arrow-right.png'

<ReactMagicalCarousel
slideWidth={'100%'}
ratio={9/16}
renderJumpBtns={true}
previousBtn={(onJump) => <img className='previous-btn' src={leftIcon} alt='previous-btn' onClick={onJump} />}
nextBtn={(onJump) => <img className='next-btn' src={leftIcon} alt='next-btn' onClick={onJump} />}
onSelectSlide={({ currentSlide }) => console.log(currentSlide)}>
    {images.map((x, i) => <img key={'img_'+i} src={x} alt={'img_'+i} />)}
</ReactMagicalCarousel>
```

## Props

| Name         | Type      | Default | Description
| ------------- |:---------:| :-----:|-------------
| children | JSX.Element | JSX.Element[] | The components for the slides, if it's length is 1, the carousel features will be disabled
| slideWidth | string | 100% | The width of the slides, it can be in 'px' or '%'. Not the width of the wrapper component, it's width is 100% of it's parent
| slideHeight | string | 500px | The fixed height of slides, it can be in 'px' or 'vh', it overwrites the 'ratio' prop
| ratio | number | - | The ratio proportion of the slides, it will force the same proportion in all screen sizes
| slideMargin | string | - | The margin between each slide, it can be in 'px' or '%'
| renderDotBtns | boolean | false | It tells if the component should render the bottom navigation
| renderJumpBtns | boolean | false | It tells if the component should render the arrow buttons on each side
| nextBtn | (onJump: () => Promise<void>) => JSX.Element | - | It overwrites the default next slide arrow button
| previousBtn | (onJump: () => Promise<void>) => JSX.Element | - | It overwrites the default previous slide arrow button
| jumpInterval | number | - | The time in miliseconds in which the carousel will wait to  automatically pass between it's slides, it won't happen if the prop it's not set
| transition | number | 250 | The time in miliseconds which takes for a slide jump to another
| onSelectSlide | Function | - | It returns an object with the current slide index and the jump count of slides from the last one to the current one