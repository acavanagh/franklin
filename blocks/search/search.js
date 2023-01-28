import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
      // fetch nav content
  const resp = await fetch('searchdata.json');

  if (resp.ok) {
    const config = await resp.json();
    console.log(config.data);
    const data = config.data;
    const searchIndex = data.find(item => item.Key === "searchIndex").Text;
    console.log(searchIndex);
    // Create the form element
    var form = document.createElement("form");

    // Create the input element
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "query");
    input.setAttribute("placeholder", "Search...");
    block.append(input);
    // Add the input to the form
    form.appendChild(input);

    // Create the submit button
    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerHTML = "Search";

    // Add the button to the form
    form.appendChild(button);

    // Add the form to the page
    block.append(form);    

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var keyword = input.value;
      var url = `https://next-gen-search-production.digitalpfizer.com/api/v3/search?fuzziness=0&isipi=1&index=${searchIndex}&pageNumber=1&pageSize=100&keyword=${keyword}`;
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          loadSearchResults(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
    // Create the search results element
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.setAttribute("id", "search-results");
    block.append(searchResultsContainer);   
    } 
}

function loadSearchResults(data) {
    console.log(data);
    var results = data.data.results;
    console.log(results);
    var searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var title = result.title;
      var url = result.page_link;
      var snippet = result.search_description;
      var resultDiv = document.createElement("div");
      var resultTitle = document.createElement("a");
      resultTitle.setAttribute("href", url);
      resultTitle.innerHTML = title;
      resultDiv.appendChild(resultTitle);
      var resultSnippet = document.createElement("p");
      resultSnippet.innerHTML = snippet;
      resultDiv.appendChild(resultSnippet);
      searchResults.appendChild(resultDiv);
    }
}