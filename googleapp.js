/*function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var action = data.action;
  var result;

  switch (action) {
    case 'getStats':
      result = getStats();
      break;
    case 'incrementCount':
      result = incrementCount(data.id);
      break;
    case 'resetClicks':
      result = resetClicks();
      break;
    default:
      result = { error: 'Invalid action' };
  }

   return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}


function getStats() {
  var ssId = '1PFGY61mvw1FRBf7r1ynTblaSCrsghFL3b1l1GVZJv-E';
  var sheet = SpreadsheetApp.openById(ssId).getSheetByName("DB");
  var data = sheet.getDataRange().getValues();
  var stats = data.slice(1).map(function(row) {
    return { id: row[0], type: row[1], color: row[2], clicks: row[3] };
  });
  return stats;
}

function incrementCount(id) {
  var ssId = '1PFGY61mvw1FRBf7r1ynTblaSCrsghFL3b1l1GVZJv-E';
  var sheet = SpreadsheetApp.openById(ssId).getSheetByName("DB");
  if (!sheet) {
    console.error('Sheet "DB" not found.');
    return { success: false, message: 'Sheet not found' };
  }
  var data = sheet.getDataRange().getValues();
  var updated = false;

  for (var i = 1; i < data.length; i++) {
    // Перевірка, чи id у рядку дорівнює переданому id, з конвертацією обох до чисел для уникнення помилок формату
    if (Number(data[i][0]) === Number(id)) {
      var newCount = parseInt(data[i][3]) + 1;
      sheet.getRange(i + 1, 4).setValue(newCount);
      updated = true;
      break;
    }
  }

  return updated ? { success: true, id: id, newCount: newCount } : { success: false, message: 'Item not found' };
}





function resetClicks() {
  var ssId = '1PFGY61mvw1FRBf7r1ynTblaSCrsghFL3b1l1GVZJv-E';
  var sheet = SpreadsheetApp.openById(ssId).getSheetByName("DB");
  if (!sheet) {
    console.error('Sheet "Sheet1" not found.');
    return { error: 'Sheet not found' };
  }
  var data = sheet.getDataRange().getValues();
  var range = sheet.getRange(2, 4, data.length - 1);
  range.setValues(Array(data.length - 1).fill([0]));
  return { success: true, message: 'All clicks have been reset' };
}

 */