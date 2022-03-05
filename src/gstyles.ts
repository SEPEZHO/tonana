import { createGlobalStyle } from "styled-components";
import Baloo from "./static/Baloo.ttf";

 const Gstyles =  createGlobalStyle`
	@font-face {
		font-family: "Baloo";
		src: local("Baloo"), url(${Baloo});
	}
  * {
  font-family: "Baloo";
	color: #671AE4 !important;

  }
	body{
		background: linear-gradient(113.49deg, #FF897E -30.3%, #FFC916 58.12%);
		display: flex;
		justify-content: center;
		padding: 120px 0 ;
	}
	.App {
		h1 {
			color:  #671AE4 !important;
text-align: center;
		}
		h2 {
			color:  #671AE4 !important;
text-align: center;
		}
		max-width: 400px;
		img {
			width: 300px;
			transition: .3s;
			cursor: pointer;
    transform: rotate3d(0, 1, 0, 180deg)
			/* transform: rotate3d(0, 1, 0, 0) */

		}
		button{
			background: linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%) !important;
border-radius: 10px !important;
padding: 16px 24px !important;
display: flex !important;
justify-content: center !important;
align-items: center !important;
width: 100%;
* { color: white !important;}

		}
		input {
			background: #FFC916 !important;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)!important;
border-radius: 10px!important;
width: 100% !important;
color: black !important;

		}
	}
	@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
	  /* @media screen and (min-width: 1024px)
    animation: rotate3d 5s linear
  @media screen and (max-width: 1024px)
    animation: rotate3dsec 5s linear

  from

  50% */
    /* transform: rotate3d(0, 1, 0, 180deg) */

  /* to
    transform: rotate3d(0, 1, 0, 360deg) */


`;

export default Gstyles

