module.exports = {
  name: "Display",
  color: "230",
  icon: "/static/icons/icons8_picture_96px_1.png",
  blocks: [
    {
          xml: `<block type="variables_set">
                                 <field name="VAR">img1</field>
                                 <value name="VALUE">
                                     <block type="i2c128x64_create_image" inline="false"></block>
                                 </value>
                             </block>`
        },
        {
          xml:
            `<block type="i2c128x64_display_image">
                         <value name="img">
                             <block type="variables_get">
                                 <field name="VAR">img1</field>
                             </block>
                         </value>
                         <value name="x">
                             <shadow type="math_number">
                                 <field name="NUM">0</field>
                             </shadow>
                         </value>
                         <value name="x">
                             <shadow type="math_number">
                                 <field name="NUM">0</field>
                             </shadow>
                         </value>
                         <value name="y">
                             <shadow type="math_number">
                                 <field name="NUM">0</field>
                             </shadow>
                         </value>
                         <value name="width">
                             <shadow type="math_number">
                                 <field name="NUM">10</field>
                             </shadow>
                         </value>
                         <value name="height">
                             <shadow type="math_number">
                                 <field name="NUM">10</field>
                             </shadow>
                         </value>
                     </block>`
        },
        "tft_display_setRotation",
        "tft_display_fillScreen",
        {
          xml:
            `<block type="tft_display_print">
                        <value name="TEXT">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="X">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="Y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
        },
        {
          xml:
            `<block type="tft_display_draw_line">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
        },
        {
          xml:
            `<block type="tft_display_draw_rect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                    </block>`
        },
        {
          xml:
            `<block type="tft_display_draw_circle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">20</field>
                            </shadow>
                        </value>
                    </block>`
        },
        "basic_string"
  ]
};
