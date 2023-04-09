function filterFulfillmentStatus_updateData(w) {
  w.data.data = filterFulfillmentStatus_updateFilterValue(w.data.data);
  return w;
}

function filterFulfillmentStatus_updateFilterValue(arr) {
  return arr.filter(
    (item, index) => arrayFilterRemove.indexOf(item.text) < 0
  );
}

function filterFulfillmentStatus_cssStyle(w) {
  let widget = $("#" + w.general.renderTo);
  let width = 500; // Ширина выпадающего списка виджета. Если 0 - остается неизменна
  let height = 0; // Высота выпадающего списка виджета. Если 0 - остается неизменна
  let listPosition = "right"; // Выравнивание выпадающего списка right или left

  //Изменить шрифт вложеных значений
  widget.find(".rb-filter-list-item-text").attr("style", "font-size: 18px");
  widget.find(".rb-filter-exclude-container").attr("style", "font-size: 18px");

  //изменить стрелку выпадающего меню
  widget.find(".rb-filter-header-arrow").css({ color: "#0033FF" });
  // Изменить крестик выпадающего меню
  widget.find(".rb-filter-header-close").css({ color: "#0033FF" });

  //скрыть кнопи 'Выбрать отображаемое' и  'снять выделение'
  widget
    .find(".rb-filter-selection-buttons-container")
    .css({ display: "none" });
  widget.find(".rb-filter-header-arrow").css({ color: "#0033FF" });

  // Высота выпадающего списка
  widget.find(".rb-filter-body-container .rb-filter-list-container > ul").css({
    height: "auto",
    "max-height": height ? height + "px" : "500px",
  });
  // Мин Ширина выпадающего списка и ширина выпадающего списка
  widget
    .find(".rb-filter-body-container")
    .css({ "min-width": "310px", width: width ? width + "px" : "310px" });

  // Изменяем цвет контура фильтра, в borderColor можно подставить любой цвет для перекраски контура фильтров
  const borderColor = "#C4CDD6";
  widget
    .find(".rb-filter-header-container")
    .css({ border: `1px solid ${borderColor}` });
  // Изменяем скругление контура фильтра, в borderRadius можно подставить величину
  const borderRadius = "20px";
  widget
    .find(".rb-filter-header-container")
    .css({ "border-radius": `${borderRadius}` });

  //скрыть кнопки 'Выбрать отображаемое' и  'снять выделение'
  $("#widget-" + w.general.renderTo)
    .find(".rb-filter-selection-buttons-container")
    .css({ display: "none" });

  // Позиционирование выпадающего списка
  widget.find(".rb-filter-body-container").css({
    position: "absolute",
    [listPosition]: 0,
  });
}
