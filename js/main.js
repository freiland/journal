
//import $ from '/jquery';
//import 'bootstrap';
//import '../css/bootstrap.css';
import '../css/styles.css';
import  { Journal } from './journal.js';
import Entry from './entry.js';


$(document).ready(function() {
  $('#journal-topic').submit(function(event) {
    event.preventDefault();
    const inputSubject = $('#subject').val();
    const inputBody = $('#body').val();
    const entry = new Entry(inputHead, inputBody);
    const response = triangle.checkType();
    $('#response').append(`<p>${response}</p>`);
  });

  $('#rectangle-area-form').submit(function(event) {
    event.preventDefault();
    const length1 = parseInt($('#rect-length1').val());
    const length2 = parseInt($('#rect-length2').val());
    const rectangle = new Rectangle(length1, length2);
    const response = rectangle.getArea();
    $('#response2').append(`<p> The area of the rectangle is ${response}.</p>`);
  });
});