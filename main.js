
const router = {

  home: {
    page: "./index.html",
    title: "home page"
  },

  blog: {
    page: "./blog.html",
    title: "blog page"
  },

  product: {
    page: "./product.html",
    title: "product page"
  },

  aboutus: {
    page: "./aboutus.html",
    title: "aboutUs"
  }

}

const navlink = document.querySelectorAll('.nav')
const Container = document.querySelector('.mainContainer')


navlink.forEach((link) => {
  link.addEventListener('click', (e) => {

    e.preventDefault()

    //getting state out
    const href = link.getAttribute('href').substring(1);
    changeUrl(href)

  })
})


///pushstate method  
const changeUrl = (href) => {
  window.history.pushState({ href }, "", `#${href}`)
  getpageswithfetch(href)

}

const getpageswithfetch = async (href) => {

  const { page, title } = router[href];

  const data = await fetch(page);
  ///we use data.text().just beqause we we get not json file !
  const toHtml = await data.text();

  //we use it just beqause we need to return the data to readable 
  const parser = new DOMParser();
  const documentaition = parser.parseFromString(toHtml, "text/html");

  const headers = documentaition.body.querySelector('.nav-header')

  if (headers) {
    const docContainer = documentaition.body.querySelector('.mainContainer')
    Container.innerHTML = docContainer.outerHTML
  } else {
    Container.innerHTML = documentaition.body.outerHTML
  }

  document.title = title;

}

window.addEventListener('popstate', (e) => {
  // console.log(e.state);

  if (e.state === null) {
    getpageswithfetch("home")
  } else {
    getpageswithfetch(e.state.href)

  }

})

window.addEventListener('DOMContentLoaded', () => {

  const loc = location.hash ? location.hash.substring(1) : "home";
  getpageswithfetch(loc)

  //or   

  // const loc = location.hash.substring(1)
  // if (loc) {
  //   getpageswithfetch(loc)
  // } else { getpageswithfetch("home") }

})




