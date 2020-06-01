const nativeImage = require("electron").nativeImage;

//function hex(arrayBuffer) {
//  return Array.from(new Uint8Array(arrayBuffer))
//    .map(n => n.toString(16).padStart(2, "0"))
//    .join("");
//}

module.exports = function(Blockly) {
  "use strict";
  Blockly.JavaScript["i2c128x64_create_image"] = function(block) {
    var dataurl = block.inputList[1].fieldRow["0"].src_;
    var image = nativeImage.createFromDataURL(dataurl);
    var size = image.getSize();

    var mm = image.getBitmap();
    var arr = [];
    var raw = [];
    for (let i = 0; i < image.getBitmap().length - 4; i += 4) {
      let [r, g, b] = [mm[i + 2], mm[i + 1], mm[i + 0]];
      let out = (((r & 0xf8) << 8) + ((g & 0xfc) << 3) + (b >> 3));
      arr.push("0x" + out.toString(16));
    }
    console.log(raw);
    var code = `[]() -> uint16_t * { static const uint16_t addr[] PROGMEM =  {${arr.join(",")}}; return addr;}();`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["i2c128x64_display_image"] = function(block) {
    var value_img = Blockly.JavaScript.valueToCode(block,
      "img",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_width = Blockly.JavaScript.valueToCode(block,
      "width",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block,
      "height",
      Blockly.JavaScript.ORDER_ATOMIC);
    
      // var checkbox_fill = block.getFieldValue("fill") == "TRUE";
      // if (checkbox_fill) {
      //   `tft.drawXBitmap(${value_x}, ${value_y}, ${value_img}.data(), ${value_width}, ${value_height}, 0x);`;
      // } else {
      //   `tft.drawXBitmap(${value_x}, ${value_y}, ${value_img}.data(), ${value_width}, ${value_height}, 0x0);`;
      // }

    //var code = `display.drawFastImage(${value_x}, ${value_y}, ${value_width},${value_height},${value_img}.data());\n`;
    var code = `tft.pushImage(${value_x}, ${value_y}, ${value_width}, ${value_height}, ${value_img});`;

    return code;
  };

  Blockly.JavaScript["i2c128x64_display_clear"] = function(block) {
    var code = "display.clear();\n";
    return code;
  };

  Blockly.JavaScript["i2c128x64_display_display"] = function(block) {
    var code = "display.display();\n";
    return code;
  };

// ######################################################################
  Blockly.JavaScript["tft_display_setRotation"] = function(block) {
    var code = "tft.setRotation(" + block.getFieldValue("rotation") + ");\n";
    return code;
  };

  Blockly.JavaScript["tft_display_fillScreen"] = function(block) {
    let color = block.getFieldValue("COLOR");
    color = color.replace("#", "0x");
    let sourceColor = parseInt(color, 16);
    let red = (sourceColor & 0x00FF0000) >> 16;
    let green = (sourceColor & 0x0000FF00) >> 8;
    let blue = sourceColor & 0x000000FF;
    let out = (red >> 3 << 11) + (green >> 2 << 5) + (blue >> 3);
    out = out.toString(16);
    var code = "tft.fillScreen(0x" + out + ");\n";
    return code;
  };

  Blockly.JavaScript["tft_display_setTextSize"] = function(block) {
    var code = "tft.setTextSize(" + block.getFieldValue("textSize") + ");\n";
    return code;
  };

  function rgbto16bit(colorIN) {
    let color = colorIN.replace("#", "0x");
    let sourceColor = parseInt(color, 16);
    let red = (sourceColor & 0x00FF0000) >> 16;
    let green = (sourceColor & 0x0000FF00) >> 8;
    let blue = sourceColor & 0x000000FF;
    let out = (red >> 3 << 11) + (green >> 2 << 5) + (blue >> 3);
    out = out.toString(16);
    return out;   // The function returns the product of p1 and p2
  }

  Blockly.JavaScript["tft_display_print"] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block,
      "TEXT",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block,
      "X",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "Y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_textSize = block.getFieldValue("textSize");
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));

    var code =
      `
  tft.setTextSize(${value_textSize});
  tft.setCursor(${value_x}, ${value_y});
  tft.setTextColor(0x${value_color});
  tft.println(String(${value_text}));
  `;
    return code;
  };
// ######################################################################

  Blockly.JavaScript["i2c128x64_display_print"] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block,
      "text",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_font = block.getFieldValue("font");
    var code =
      `
  display.setFont(${dropdown_font});
  display.drawString(${value_x},${value_y},String(${value_text}));
  `;
    return code;
  };

  Blockly.JavaScript["tft_display_draw_line"] = function(block) {
    var value_x0 = Blockly.JavaScript.valueToCode(block,
      "x0",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y0 = Blockly.JavaScript.valueToCode(block,
      "y0",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x1 = Blockly.JavaScript.valueToCode(block,
      "x1",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y1 = Blockly.JavaScript.valueToCode(block,
      "y1",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));

    var code =
      `
  tft.drawLine(${value_x0},${value_y0},${value_x1},${value_y1},0x${value_color});
  `;
    return code;
  };

  Blockly.JavaScript["tft_display_draw_rect"] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_width = Blockly.JavaScript.valueToCode(block,
      "width",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block,
      "height",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));
    var checkbox_fill = block.getFieldValue("fill") == "TRUE";

    if (checkbox_fill) {
      var code =
        `
    tft.fillRect(${value_x},${value_y},${value_width},${value_height},0x${value_color});
    `;
    } else {
      var code =
        `
    tft.drawRect(${value_x},${value_y},${value_width},${value_height},0x${value_color});
    `;
    }
    return code;
  };

  Blockly.JavaScript["tft_display_draw_circle"] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_r = Blockly.JavaScript.valueToCode(block,
      "r",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));
    var checkbox_fill = block.getFieldValue("fill") == "TRUE";

    if (checkbox_fill) {
      var code =
        `
    tft.fillCircle(${value_x},${value_y},${value_r},0x${value_color});
    `;
    } else {
      var code =
        `
    tft.drawCircle(${value_x},${value_y},${value_r},0x${value_color});
    `;
    }
    return code;
  };

  Blockly.JavaScript["i2c128x64_display_draw_progress_bar"] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_width = Blockly.JavaScript.valueToCode(block,
      "width",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block,
      "height",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_progress = Blockly.JavaScript.valueToCode(block,
      "progress",
      Blockly.JavaScript.ORDER_ATOMIC);
    var code = `display.drawProgressBar(${value_x}, ${value_y}, ${value_width}, ${value_height}, ${value_progress});\n`;
    return code;
  };

  Blockly.JavaScript["i2c128x64_display_draw_pixel"] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));  
    var code = 
    `
    tft.drawPixel(${value_x}, ${value_y}, 0x${value_color});
    `;
    return code;
  };

  Blockly.JavaScript["i2c128x64_display_string_width"] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block,
      "text",
      Blockly.JavaScript.ORDER_ATOMIC);
    var code = `display.getStringWidth(${value_text},${value_text.length})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["i2c128x64_display_width"] = function(block) {
    var code = "display.getWidth()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["i2c128x64_display_height"] = function(block) {
    var code = "display.getHeight()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

};
