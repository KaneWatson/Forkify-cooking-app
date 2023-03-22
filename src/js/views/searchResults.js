import PreviewView from './previewView';

class SearchResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'No recipes found for your query. Try searching for something else!';
  _message = '';
}

export default new SearchResultsView();
