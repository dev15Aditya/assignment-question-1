# Instructions

- clone this repo and open with your favorite code editor

- make sure you are checked out to `master` branch

- to run the app `npm install` then `npm start`

## Please fix the following issues

1.  In the title of the header, it displays `5 orders` but there are `6 orders` in the table. We want to display the `total` number of `orders` in the header title
    --> To display the total number of orders in the header title, I updated the header to show the count of orders retrieved from the mockData source.

2.  In the table order submitted date is missing, we have timestamp data included in the `src\assets\timeStamps.json` with the corresponding ids, please combine that with the order data and make sure the order submitted date is being displayed in the table
    --> Combined the timestamp data from src\assets\timeStamps.json with the order data, the order submitted date is now extracted and displayed in the table.

3.  Order Volume cell is displaying USD values, can you please make it display the currency value selected on the dropdown located in the header of the dashboard
    --> The Order Volume cell now dynamically displays the currency value based on the selection made in the dropdown located in the header of the dashboard.

4.  Can you please add search feature on the order IDs with the search bar given in the header
    --> Search bar in the header captures user input. Upon input, I filtered the list of orders to display only those that include the search text in their order IDs.

5.  Please clear the console errors and warnings.
    --> Key was not there is List Component's -> ListRow
    --> Same issue with Cards component after giving key to both the components, console become clear.

6.  When user selects an order, can you populate the Card on top of the listing component as shown in the image
    --> When a user clicks on a specific order in the list, I utilized the handleClick function to update the state of the selected order details. This updated state is then passed to the Card component, which dynamically populates with the selected order's specific details.

![alt text](dashboard.JPG)

## Bonus

- run storybook `npm run storybook`

1. Please add storybook to one of the components
