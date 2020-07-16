import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
//======================================================EXERCISE 1==========================================================================================
const Card = [
  'Subwoofer',
  'Non-porous, washable',
  'Wings',
  'Beveeled Bezel',
  'Bezeled Bevel',
  'Seedles'
];
const AddCard = ({Card}) => (
    Card.map(item => (
      <div className='ticket'>{item}</div>
    )
    )
  )

const Phone = () => {
  return (
    <div className="box">
    <div className='container'>
    <div className='ticket title'><div>Phone Features</div><div>...</div></div>
    <AddCard Card={Card}/>
    <div className='ticket'>Add a card...</div>
    </div>
    </div>
  )
}

//========================================================EXERCISE==========================================================================================
//==========================================================BLOG PAGE DESIGN================================================================================
// This component collects time as a prop and displays how long ago it is
const TellTime = (timestring) => {
  const timeString = moment(timestring).fromNow();
  return (
    <span>
      {timeString}
    </span>
  )
};
const HeaderItems = [
  //THIS AN ARRAY OF ITEMS DISPLAYED ON THE HEADER
  <span className="logo"><i className="fa fa-y-combinator" aria-hidden="false"/></span> ,
  `Hacker News`,
  'new',
  'thread',
  'comments',
  'show',
  'ask',
  'jobs',
  'submit'
];
const Header = ({ HeaderItems }) => {
  //THIS FUNCTION GENERATES THE HEADER USING  'HeaderItems' WHICH CONTAINS THE HEADER ELEMENT
  return (<div className="header-container">
    <div className='header'>
  {HeaderItems.map(comp => (<div>
  {comp}
  </div>
  )
  )}
    </div>
  </div>
  )
};

//#region  NOTE EVERY THING HERE REPRESENT INFO FROM A DATE BASE USED TO GENERATE THE BODY ELEMENT*/
const BodyContent = [
  {
    title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
    site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
    title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
    site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
    title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
    site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
    title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
    site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
    title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
    site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
    title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
    site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
    title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
    site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
  title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
  site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
  title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
  site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
  title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
  site: `bunniestudios.com`,
  thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
    title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
    site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
  {
    title: `Why I'm Suing the US Government is purely because I do not have any other better way of making money and this could be my hope to survive of survival during this pandemic`,
    site: `bunniestudios.com`,
    thread: `1346 by Ivank`,
    time: `2020-04-13 09:04:33`,
    flag:`flag`,
    hide:`hide`,
    comment: `257`,
    instapper:`instapper`,
    save: `save to post`
  },
]
//#endregion

const WordControle = (words, limit) => {//THIS FUNCTON CAN BE IS USED TO LIMIT THE NUMBER OF CHARACTER  FROM ANY  DATABASE
  return(words.slice(0,limit))
}

const Body = ({BodyContent}) => {
  return (
    <div className='postbody'>
      {BodyContent.map((items,count = 1) => (
        <div className='post-line'>
          <span className="number-text">{count + 1}.</span>
          <span className="triangle"></span>
          <div>
            <div className='post-line--title'>{WordControle(items.title, 50)}</div>
          <div className='post-line--others'>({items.site})</div>
          <div className='post-line--others'>{items.thread}</div>
          <div className='post-line--others'><TellTime timestring={items.time}/></div>
          <div className='post-line--others'>{items.flag}</div>
          <div className='post-line--others'>{items.hide}</div>
          <div className='post-line--others'>{items.comment}</div>
          <div className='post-line--others'>{items.instapper}</div>
            <div className='post-line--others'>{items.save}</div>
          </div>
        </div>  
        ))}
    </div>
  )
}
const PostContainer = () => {
  return (
    <div>
      <Header HeaderItems={HeaderItems} />
      <Body BodyContent={BodyContent}/>
    </div>
  )
}

ReactDOM.render(
  [
    <Phone />,
<div className="numbering">2</div>,
  <PostContainer/>
  ]
  ,
  document.getElementById('root')
);

