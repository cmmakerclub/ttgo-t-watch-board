// This header file contains a list of user setup files and defines which one the
// compiler uses when the IDE performs a Verify/Compile or Upload.
//
// Users can create configurations for different Espressif boards and TFT displays.
// This makes selecting between hardware setups easy by "uncommenting" one line.

// The advantage of this hardware configuration method is that the examples provided
// with the library should work with different setups immediately without any other
// changes being needed. It also improves the portability of users sketches to other
// hardware configurations and compatible libraries.
//
// Create a shortcut to this file on your desktop to permit quick access for editing.
// Re-compile and upload after making and saving any changes to this file.

// Customised User_Setup files are stored in the "User_Setups" folder.

#ifndef USER_SETUP_LOADED //  Lets PlatformIO users define settings in
                          //  platformio.ini, see notes in "Tools" folder.

// Only ONE line below should be uncommented.  Add extra lines and files as needed.
#include <Arduino.h>


#define TFT_WIDTH  240
#define TFT_HEIGHT 240
#define ST7789_DRIVER

#define TFT_MISO            -1
#define TFT_MOSI            19
#define TFT_SCLK            18
#define TFT_CS              5
#define TFT_DC              27

// #define SPI_FREQUENCY   1000000
// #define SPI_FREQUENCY   5000000
// #define SPI_FREQUENCY  10000000
// #define SPI_FREQUENCY  20000000
// #define SPI_FREQUENCY 27000000 // Actually sets it to 26.67MHz = 80/3
// #define SPI_FREQUENCY  40000000 // Maximum to use SPIFFS
#define SPI_FREQUENCY  80000000

#define LOAD_GLCD   // Font 1. Original Adafruit 8 pixel font needs ~1820 bytes in FLASH
#define LOAD_FONT2  // Font 2. Small 16 pixel high font, needs ~3534 bytes in FLASH, 96 characters
#define LOAD_FONT4  // Font 4. Medium 26 pixel high font, needs ~5848 bytes in FLASH, 96 characters
#define LOAD_FONT6  // Font 6. Large 48 pixel font, needs ~2666 bytes in FLASH, only characters 1234567890:-.apm
#define LOAD_FONT7  // Font 7. 7 segment 48 pixel font, needs ~2438 bytes in FLASH, only characters 1234567890:.
#define LOAD_FONT8  // Font 8. Large 75 pixel font needs ~3256 bytes in FLASH, only characters 1234567890:-.
#define LOAD_GFXFF  // FreeFonts. Include access to the 48 Adafruit_GFX free fonts FF1 to FF48 and custom fonts
#define SMOOTH_FONT



#endif // USER_SETUP_LOADED

#include "ST7789_Defines.h"
#define  TFT_DRIVER 0x7789

// These are the pins for all ESP8266 boards
//      Name   GPIO    Function
#define PIN_D0  16  // WAKE
#define PIN_D1   5  // User purpose
#define PIN_D2   4  // User purpose
#define PIN_D3   0  // Low on boot means enter FLASH mode
#define PIN_D4   2  // TXD1 (must be high on boot to go to UART0 FLASH mode)
#define PIN_D5  14  // HSCLK
#define PIN_D6  12  // HMISO
#define PIN_D7  13  // HMOSI  RXD2
#define PIN_D8  15  // HCS    TXD0 (must be low on boot to enter UART0 FLASH mode)
#define PIN_D9   3  //        RXD0
#define PIN_D10  1  //        TXD0

#define PIN_MOSI 8  // SD1
#define PIN_MISO 7  // SD0
#define PIN_SCLK 6  // CLK
#define PIN_HWCS 0  // D3

#define PIN_D11  9  // SD2
#define PIN_D12 10  // SD4
