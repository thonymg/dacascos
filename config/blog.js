const getFormattedDate = () => {
  var todayTime = new Date();
  var sec = todayTime.getSeconds();
  var min = todayTime.getMinutes();
  var hour = todayTime.getHours();
  var day = todayTime.getDate();
  var month = todayTime.getMonth() + 1;
  var year = todayTime.getFullYear();
  return `${year}-${month}-${day}-${hour}h-${min}min-${sec}s`;
}

var strTimestamp = () => {
  return toString(Date.now());  
} 

var todayNow = getFormattedDate();

var key = strTimestamp();


var config = {
  date: todayNow,
  author: 'ThonyMg',

  site: {
    baseUrl: '',
    title: '',
    Description: '',
    keywords: []
  },

  blog: {
    dir: './content/blog/',
    namespace: 'blog-post'
  },

  page: {
    dir: './content/pages/',
    namespace: 'page'
  }
}


var baseContent = (title, meta = false) =>{
  return `---
title: ${title}
author: ${config.author}
createdAt: "${todayNow}"
updatedAt: "${todayNow}"
${meta}
key: ${key}-${title}
---
# Yolo
## Yahoo
### Google
### anosibe

Lorem ipsum dolor sit amet, 
consectetur adipisicing elit. 
Dicta cupiditate rem quas hic, 
modi maxime eaque! Perferendis 
ipsum laudantium sint maiores
temporibus atque fuga inventore 
`
}

exports.getFormattedDate = getFormattedDate;
exports.baseContent = baseContent;
// TODO: ne pas oublier de transformer le titre dashcase en titre normale 