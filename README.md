<p align="center">
  <!-- <a href="https://github.com/github_username/repo_name"> -->
  <br>
  <a href="https://github.com/dharmik0070/">
    <img src="https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Banner.png" alt="Banner" width="100%" height="100%">
  </a>
  <p align="center">
    A place where you can buy happiness
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/dharmik0070/Global-Supermarket/blob/master/Images/Gifs/View%20Demo.gif">View Demo</a>
  </p>
</p>
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#how-it-works">How it works</a>
      <ul>
        <li><a href="#1-an-entry-point">2.1 An Entry Point
</a></li>
        <li><a href="#2-salesorder-page">2.2 Sales/Order Page
</a></li>
        <li><a href="#3-manage-products-page">2.3 Manage Products Page
</a></li>
<li><a href="#4-place-order-page">2.4 Place Order Page
</a></li>
      </ul>
    </li>
    <li><a href="#navigation">Navigation</a></li>
    <li><a href="#how-it-was-made">How it was made
</a>
</li>
    <li><a href="#challenges-faced
">Challenges Faced
</a>
<ul>
        <li><a href="#challenges-faced">5.1 Database
</a></li>
        <li><a href="#challenges-faced">5.2 Backend
</a></li>
        <li><a href="challenges-faced">5.3 Frontend
</a></li>
</ul></li>
<li><a href="#contact">Contact
</a></li>
  </ol>
</details>



# About The Project
>This project allows users to keep track of stocks, customer details, order details and also have functionality of add or remove products/items.

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description` -->


## Built With

* ###### Frontend
  - `HTML`
  - `CSS`
  - `JAVASCRIPT`
* ###### Backend
  - ***Server***
    - `Python Flask`
  - ***Database***
    - `MySQL`
  - `Python`

<!-- GETTING STARTED -->
# How it works

## 1. <u>An Entry Point</u>

This is the splash screen (an animation plays here), which is entry point of the website.
<br>

![Splash](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/Splash.gif)

- In above screen, one can see the <b>"Explore the sales"</b> button.
- By clicking it, you will be redirected to <b>*"Sales"*</b> page.
## 2. <u>Sales/Order Page</u>

In this page, overall order details is shown to the Owner.
<br>

![Sales Page](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/Sales%20Page.gif)


- It includes basic details of customer's shopping such as Date & Time, Order No., Customer's Name and Total Cost.
- To check more details of respective customer, one can click <b>*"View Details"*</b> button under *Action Tab*.
- All Details will be shown in Grid view.
- On Top-Right, you can see 2 buttons to <b>*"Manage Products"*</b> and to place <b>*"New Order"*</b>.
  ### 2.1 View Button
<br>

![View Button](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/View%20Button.gif)

- It displays the details of each customer's cart.
  ### 2.2 Manage Products Button
- It allows Owner to <b>*Add / Delete / Edit*</b> products.
- By clicking it, you will be redirected to the *"Manage products"* page.
  ### 2.3 New Order Button
- It allows Customer to <b>*Place the new Order*</b>.
- By clicking it, you will be redirected to the *"Place Order"* page.
## 3. <u>Manage Products Page</u>
<br>

![Manage Products Page](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/Add%20Button.gif)

- On this page, on top-right page, there is <b>*Add New Product*</b>, which allows one to add new products.
- By clicking it, one pop-up box it will be displayed.
  ### 3.1 Add New Product
- In this box, one have to enter the product details like name, unit and price.
  - Name should be `text` only.
  - Unit should be selected from the `Dropdown`.
  - Price should be `numeric` only.

  <b>Note: It is mandatory to fill all the details in this box, otherwise it will warn the user.</b>
<br>

![Validation](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/Validation.gif)
- To Save the product, click <b>Save</b> button.
- To close the box, click <b>*Close*</b> button.
  ### 3.2 Delete Product
- After adding/saving the product, changes will be reflected on the same page in Grid view.
- It allows user to Delete the product using the <b>*Delete*</b> button, where it prompt the user for confirmation.
<br>

![Delete Button](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/Delete%20Button.gif)

  ### 3.3 Edit Product
- After adding/saving the product, changes will be reflected on the same page in Grid view.
- It allows user to Edit the product using the <b>*Edit*</b> button, where again the pop-box populated with previously filled details will get open.
- Edit the details and press *Save* to save the edited product.
<br>

![Edit Button](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/Edit%20Button.gif)

- On this page, one can place the orders.
## 4. <u>Place Order Page</u>

<br>

![New Order](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/New%20Order%20Button.gif)
- On this page, you have mandatorily enter the *Customer's Name* in `text` to place an order.
    ### 4.1 Add more button
- To order an item, click on <b>*Add More*</b> button and fill the required details.
  - Select an item from the `Dropdown` mandatorily.
  - Price will be displayed automatically.
  - Select the `Quantity`, by default it will start from *one*.
  - To add more items, click on the `Add more` button available on the top.
  ### 4.2 Remove button
  - To remove an item from the cart, click on the `Remove` button available on the respective item in the cart.
- Grand Total of items in the cart will be displayed at the bottom.
- To place an order, Click on the `Save` button at the bottom.
<br>

![Remove Button](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/Remove%20Button.gif)

## Navigation
- To navigate between different pages,
  - Click Pages name in navigation bar on the top of every page.
  - To visit *Home Page*, click on the logo *Global Supermarket*.
<br>

![Navigation](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Gifs/Navigation.gif)
# How it was made
### Step 1:
- Firstly, I made ***ER Diagram*** to manage details in Database.

![DB Design](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/DB%20Design.png)
<br>
- Then chose ***MySQL*** database and created different tables to store and manage details.
- Included Primary and Foreign constraint accordingly.

### Step 2:
- Started working with more backend development, chose ***Python*** as a programming language and ***Python Flask*** as Server.
- Included all the basic modules to insert, update and delete products.

### Step 3:
- Started building User Interface, basic structure using ***HTML***.
- Then added Javascript to enable communication to backend via ***AJAX***, used ***jQuery***.

### Step 4:
- Added ***CSS*** to improve UI.
- Continued Step 2 backend development and started building ***APIs*** of each seperate functionalities.

<!-- ![APIsBackend Jsonify](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Backend%20Jsonify.png) -->
<img src="https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/Backend%20Jsonify.png" alt="" width="100%" height="180">


### Step 5:
- Configured ***APIs*** communication in frontend using *Javascript* from Step 3.

![APIs](https://raw.githubusercontent.com/dharmik0070/Global-Supermarket/master/Images/APIs.png)


### Step 6:
- Improvised Data visualization in frontend by adding ***Dynamic JS***. E.g: Created Grid/Tables which gets populated based on querying in backend.
- Added fluidity to some components and made buttons more intuitive in UI (Frontend).

### Step 7:
- Tested each functionality thoroughly.
- Solved minor bugs (as most of them solved while developing).

<br>

## Challenges Faced

>It was great challenge for me to develop a ***Full-Stack*** application.But apart from it, there were many challenges I faced and it was really new learning, as I was new to some topics.
- <b>Database</b>
  - Like many developers, initially I faced issues in constraint management, like setting up foriegn keys in many-to-many relationship.
- <b>Backend</b>
  - Faced issue in configuring ***Edit*** button, where I'd to work with fetching and posting data at same time, in *Manage Product Page*. (Backend development was quite strong compare to frontend devlopment)
- <b>Frontend</b>
  - As I know *jQuery* a bit during developing this project, faced issues to configure button with some ***APIs*** and calling the same.
  - Also initially faced an issue in <b>jsonifying</b> frontend data to be send.
  - Faced an issue in filling up ***Edit*** Dialog box with previously entered values in *Manage Product Page*.
  - I have ***not focused on UI part much***, but faced minor issues in margin-padding like usual.
<br>

> But it was great brain-stroming and new learning to solve each issue thoroughly, it has really boosted my confidence.
<!-- CONTACT -->
## Contact

<b>Dharmik Shah</b> 
<br>
E-mail: [dharmik0070@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dharmik0070@gmail.com)
<br>
Project Link: [https://github.com/dharmik0070/Global-Supermarket](https://github.com/dharmik0070/Global-Supermarket)
<br>

