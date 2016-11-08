function Controller() {
  this.url = 'http://dl.dropbox.com/u/628209/exercises/javascript/product.json';
  this.filterContainer = $('#filter');
  this.productsContainer = $('#products');
  this.data = [];
  this.filters = ['brand', 'color', 'sold_out'];
  this.filterModels = {
    brand: [],
    color: [],
    sold_out: []
  };
  this.onDataLoaded = [this.initializeFilters, this.renderProducts];
  this.loadData();
}

Controller.prototype.loadData = function () {
  $.getJSON(this.url, function (res) {
    console.log(res);
    this.data = res;
    this
      .onDataLoaded
      .forEach(function (callback) {
        callback.call(this);
      }.bind(this));
  }.bind(this));
}

/**
 * @return Element
 */
Controller.prototype.getProductTemplate = function (product) {
  var v = '<div class="product" style="background: ' + product.color + ';"><ul>';
  for (key in product) {
    v += '<li>' + key + ' : ' + product[key] + '</li>';
  }
  v += '</ul></div>';
  return v;
}

Controller.prototype.renderProducts = function () {
  var render = this
    .data
    .filter(function (product) {
      for (var filter in this.filterModels) {
        if (this.filterModels[filter].length && this.filterModels[filter].indexOf(product[filter]) < 0) {
          return false;
        } else if (this.filterModels[filter].indexOf(1) > 0) {
          return true;
        }
      }
      return true;
    }.bind(this));

  this
    .productsContainer
    .empty();
  render.forEach(function (product) {
    this
      .productsContainer
      .append(this.getProductTemplate(product));
  }.bind(this));
}

Controller.prototype.initializeFilters = function () {
  this
    .filters
    .forEach(function (name) {
      this.setUpFilters(name);
    }.bind(this));
}

Controller.prototype.setUpFilters = function (name) {
  this[name] = this
    .data
    .reduce(function (prev, curr, currIndex, array) {
      var result = prev;
      if (currIndex == 1) {
        var result = [];
        result.push(prev[name]);
      }
      if (result.indexOf(curr[name]) < 0) {
        result.push(curr[name]);
      }
      return result;
    })
    .sort();

  this.createFilterView(name);
}

Controller.prototype.getFilterText = function (filter) {
  if (isNaN(filter)) {
    return filter;
  }
  if (Number(filter) == 0) {
    return 'Available products';
  } else if (Number(filter) == 1) {
    return 'All products';
  }
}

Controller.prototype.createFilterView = function (name) {
  var ul = $('<ul>').text('Filter by ' + name);
  this[name].forEach(function (filter) {
    var li = $('<li>');
    var checkbox = $('<input type="checkbox">')
      .attr('id', filter)
      .attr('name', name);
    checkbox.click(this.runFilter.bind(this));
    var text = filter == 0
    var label = $('<label>')
      .attr('for', filter)
      .text(this.getFilterText(filter));
    li.append(checkbox, label);
    ul.append(li);
  }.bind(this));
  this
    .filterContainer
    .append(ul);
}

Controller.prototype.runFilter = function (e) {
  if (e.target.checked) {
    this
      .filterModels[e.target.name]
      .push(e.target.id);
  } else {
    var index = this
      .filterModels[e.target.name]
      .indexOf(e.target.id);
    this
      .filterModels[e.target.name]
      .splice(index, 1);
  }
  console.log(e.target.name, e.target.id, e.target.checked, this.filterModels);
  this.renderProducts();
}