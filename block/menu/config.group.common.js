module.exports = [
  {
    name: "Variables",
    color: "230",
    icon: "/static/icons/icons8_variable_96px.png",
    custom: "VARIABLE"
  },
  {
    name: "Math",
    color: "230",
    icon: "/static/icons/calculator.png",
    blocks: [
      "math_number",
      {
        xml:
          `<block type="math_arithmetic">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
      },
      {
        xml:
          `<block type="math_variables_set">
                        <value name="VALUE">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
      },
      "math_variables_get",
      {
        xml:
          `<block type="math_pow">
                        <value name="NUM1">
                            <shadow type="math_number">
                                <field name="NUM">2</field>
                            </shadow>
                        </value>
                        <value name="NUM2">
                            <shadow type="math_number">
                                <field name="NUM">3</field>
                            </shadow>
                        </value>
                    </block>`
      },
      /*'math_sqrt',*/
      {
        xml:
          `<block type="math_single">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">9</field>
                            </shadow>
                        </value>
                    </block>`
      },
      {
        xml:
          `<block type="math_trig">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
      },
      {
        xml:
          `<block type="math_round">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">1.2</field>
                            </shadow>
                        </value>
                    </block>`
      },
      /*'math_min',
      'math_max',
      'math_map',*/
      "math_random_int",
      {
        xml:
          `<block type="math_number_property">
                        <value name="NUMBER_TO_CHECK">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                    </block>`
      }
    ]
  },
  {
    name: "Logic",
    color: "230",
    icon: "/static/icons/icons8_serial_tasks_96px.png",
    blocks: [
      "controls_if",
      "logic_compare",
      "logic_operation",
      "logic_negate",
      "logic_boolean"
    ]
  },
  {
    name: "Loops",
    color: "230",
    icon: "/static/icons/icons8_repeat_96px.png",
    blocks: [
      "basic_forever",
      "controls_whileUntil",
      {
        xml:
          `<block type="controls_for">
                        <value name="FROM">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="TO">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="BY">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
      },
      "controls_flow_statements"
    ]
  },
  {
    name: "Advanced",
    color: "195",
    icon: "/static/icons/icons8_hacker_128px.png",
    blocks: [
      {
        type: "category",
        name: "Functions",
        icon: "/static/icons/icons8_module_96px.png",
        custom: "PROCEDURE"
      },
      /*{
          type : 'category',
          name : 'Tasks',
          icon : '/static/icons/icons8_exercise_96px.png',
          blocks : [
              'create task',
              'start task',
              'stop task'
          ]
      },*/
      /*{
          type : 'category',
          name : 'Arrays',
          icon : '/static/icons/icons8_stack_96px.png',
          blocks : [
              'lists_create_empty',
              'lists_repeat',
              'lists_reverse',
              'lists_isEmpty',
              'lists_length',
              'lists_create_with',
              'lists_indexOf',
              'lists_getIndex',
              'lists_setIndex',
              'lists_getSublist',
              'lists_sort',
              'lists_split',
          ]
      },*/
      {
        type: "category",
        name: "Text",
        icon: "/static/icons/icons8_text_color_96px.png",
        blocks: [
          "basic_string",
          {
            xml:
              `<block type="text_length">
                                <value name="VALUE">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
          },
          "text_join",
          {
            xml:
              `<block type="text_append">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
          },
          {
            xml:
              `<block type="text_isEmpty">
                                    <value name="VALUE">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>                                    
                                </block>`
          },
          {
            xml:
              `<block type="text_indexOf">
                                <value name="VALUE">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
          },
          {
            xml:
              `<block type="text_charAt">
                                <value name="VALUE">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
          },
          {
            xml:
              `<block type="text_getSubstring">
                                <value name="STRING">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
          },
          {
            xml:
              `<block type="text_changeCase">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
          },
          {
            xml:
              `<block type="text_trim">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
          },
          {
            xml:
              `<block type="text_replace">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
          }
          //'text_compare',
          //'text_parse_int'
        ]
      },
      {
        type: "category",
        name: "WiFi",
        icon: "/static/icons/icons8_wifi_router_96px.png",
        blocks: [
          "wifi_connect",
          "wifi_ap",
          /*{
              xml :
                  `<block type="wifi_http_get">
                      <value name="url">
                          <shadow type="basic_string">
                              <field name="VALUE">Hello world!</field>
                          </shadow>
                      </value>
                  </block>`
          },
          {
              xml :
                  `<block type="wifi_http_post">
                      <value name="url">
                          <shadow type="basic_string">
                              <field name="VALUE">Hello world!</field>
                          </shadow>
                      </value>
                      <value name="data">
                          <shadow type="basic_string">
                              <field name="VALUE">Hello world!</field>
                          </shadow>
                      </value>
                  </block>`
          },*/
          "wifi_start_server",
          "wifi_server_on",
          {
            xml:
              `<block type="wifi_server_send">
                                    <value name="text">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
          },

          "wifi_get_ip_addr",
          "wifi_get_ap_ip_addr",
          "wifi_get_arg"
        ]
      },
      {
        type: "category",
        name: "Bluetooth",
        icon: "/static/icons/icons8_bluetooth_2_96px.png",
        blocks: [
          "bt_start",
          {
            xml:
              `<block type="bt_send_string">
                                    <value name="text">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
          },
          "bt_on_receive",
          "bt_read_data",
          "bt_read_line"
        ]
      },
      {
        type: "category",
        name: "Serial",
        icon: "/static/icons/SVG/13.svg",
        blocks: [
          "serial_usb_init",
          "serial_hardware_init",
          "serial_available",
          {
            xml:
              `<block type="serial_write_data">
                                    <value name="text">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
          },
          "serial_write_newline",
          "serial_read_line",
          "serial_read_until",
          "basic_string"
        ]
      },
      {
        type: 'category',
        name: 'Task',
        icon: '/static/icons/SVG/13.svg',
        blocks: [
          { xml: '<label text="Custom start" web-class="headline"></label>' },
          {
            xml:
              `<block type="task_io_interrupt">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>`
          },
          {
            xml: `<block type="task_timer_interrupt">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                   </block>`
          },
          {
            xml: `<block type="task_timer_interrupt_once">
                            <value name="delay">
                                <shadow type="math_number">
                                    <field name="NUM">500</field>
                                </shadow>
                            </value>
                       </block>`
          },
          'task_task',
          {
            xml: `<sep gap="32"></sep><label text="Auto start" web-class="headline"></label>`
          },
          {
            xml:
              `<block type="task_io_interrupt_ext">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>`
          },
          {
            xml: `<block type="task_timer_interrupt_ext">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                   </block>`
          },
          {
            xml: `<block type="task_timer_interrupt_once_ext">
                            <value name="delay">
                                <shadow type="math_number">
                                    <field name="NUM">500</field>
                                </shadow>
                            </value>
                       </block>`
          },
          'task_task_ext',
          {
            xml: `<sep gap="32"></sep><label text="Stopper" web-class="headline"></label>`
          },
          'task_detach_timer',
          {
            xml: `<block type="task_detach_gpio">
                            <value name="pin">
                                <shadow type="math_number">
                                    <field name="NUM">1</field>
                                </shadow>
                            </value>
                       </block>`
          }
        ]
      },
      {
        type: 'category',
        name: 'MQTT',
        icon: '/static/icons/SVG/13.svg',
        blocks:
          [
            'mqtt_block',
            'mqtt_connect_block',
            'mqtt_subscribe_block',
            'mqtt_callback_block',
            'topic_block',
            'payload_block',
            'mqtt_publish_block',
            'mqtt_loop_block'
          ]
      }
    ]
  }
];
