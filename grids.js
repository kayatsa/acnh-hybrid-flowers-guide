/* eslint-env browser */

/* 
    Huge thanks to Steven Lambert for the tileset tutorial for JS:
    https://blog.sklambert.com/create-a-canvas-tileset-background/
*/

/* INDEXING */

var flowers = {
    'EMPTY' : 0,
    'BLK_C' : 1,
    'ORG_C' : 2,
    'PNK_C' : 3,
    'RED_C' : 4,
    'WHT_C' : 5,
    'YLW_C' : 6,
    'BLU_H' : 7,
    'ORG_H' : 8,
    'PNK_H' : 9,
    'PRP_H' : 10,
    'RED_H' : 11,
    'WHT_H' : 12,
    'YLW_H' : 13,
    'BLK_L' : 14,
    'ORG_L' : 15,
    'PNK_L' : 16,
    'RED_L' : 17,
    'WHT_L' : 18,
    'YLW_L' : 19,
    'GRN_M' : 20,
    'PNK_M' : 21,
    'PRP_M' : 22,
    'RED_M' : 23,
    'WHT_M' : 24,
    'YLW_M' : 25,
    'BLU_P' : 26,
    'ORG_P' : 27,
    'PRP_P' : 28,
    'RED_P' : 29,
    'WHT_P' : 30,
    'YLW_P' : 31,
    'BLK_R' : 32,
    'BLU_R' : 33,
    'ORG_R' : 34,
    'PNK_R' : 35,
    'PRP_R' : 36,
    'RED_R' : 37,
    'WHT_R' : 38,
    'YLW_R' : 39,
    'BLK_T' : 40,
    'ORG_T' : 41,
    'PNK_T' : 42,
    'PRP_T' : 43,
    'RED_T' : 44,
    'WHT_T' : 45,
    'YLW_T' : 46,
    'BLU_W' : 47,
    'ORG_W' : 48,
    'PNK_W' : 49,
    'PRP_W' : 50,
    'RED_W' : 51,
    'WHT_W' : 52
};

/* TILESET */

var tilesetImage = new Image();
tilesetImage.src = 'images/tileset.png';
tilesetImage.onload = drawImage;

/* CANVAS */

var canvas = document.getElementsByTagName('canvas');
var ctx = [];
for (var i = 0; i < canvas.length; i++) {
    ctx.push(canvas[i].getContext('2d'));
}

/* VARIABLES */

var tileSize = 32; // size of each tile displayed on site
var rowTileCount = 7; // number of rows on tilesheet
var colTileCount = 14; // number of cols on tilesheet
var imageNumTiles = 9; // number of tiles per row on tilesheet
var imageTileSize = 128; // size of each tile on tilesheet

/* LAYOUTS */

var layouts = [

    /* PANSIES AND WINDFLOWERS */

    // STEP 1
    [
        [flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W],
        [flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W],
        [flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W],
        [flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W],
        [flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W],
        [flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W],
        [flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W]
    ],

    // STEP 2
    [
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P],
        [flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY],
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P],
        [flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY],
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P],
        [flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY],
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P]
    ],

    // STEP 3
    [
        [flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W],
        [flowers.RED_P, flowers.EMPTY, flowers.RED_P, flowers.EMPTY, flowers.RED_P, flowers.EMPTY, flowers.RED_P, flowers.RED_W, flowers.EMPTY, flowers.RED_W, flowers.EMPTY, flowers.RED_W, flowers.EMPTY, flowers.RED_W],
        [flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W],
        [flowers.RED_P, flowers.EMPTY, flowers.RED_P, flowers.EMPTY, flowers.RED_P, flowers.EMPTY, flowers.RED_P, flowers.RED_W, flowers.EMPTY, flowers.RED_W, flowers.EMPTY, flowers.RED_W, flowers.EMPTY, flowers.RED_W],
        [flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W],
        [flowers.RED_P, flowers.EMPTY, flowers.RED_P, flowers.EMPTY, flowers.RED_P, flowers.EMPTY, flowers.RED_P, flowers.RED_W, flowers.EMPTY, flowers.RED_W, flowers.EMPTY, flowers.RED_W, flowers.EMPTY, flowers.RED_W],
        [flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_P, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W, flowers.RED_W]
    ],

    /* COSMOS AND MUMS */

    // STEP 1
    [
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C],
        [flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY],
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C],
        [flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY],
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C],
        [flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY, flowers.RED_M, flowers.YLW_M, flowers.EMPTY],
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C, flowers.EMPTY, flowers.RED_C, flowers.YLW_C]
    ],

    // STEP 2
    [
        [flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M],
        [flowers.ORG_C, flowers.EMPTY, flowers.ORG_C, flowers.EMPTY, flowers.ORG_C, flowers.EMPTY, flowers.ORG_C, flowers.YLW_M, flowers.EMPTY, flowers.YLW_M, flowers.EMPTY, flowers.YLW_M, flowers.EMPTY, flowers.YLW_M],
        [flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M],
        [flowers.ORG_C, flowers.EMPTY, flowers.ORG_C, flowers.EMPTY, flowers.ORG_C, flowers.EMPTY, flowers.ORG_C, flowers.YLW_M, flowers.EMPTY, flowers.YLW_M, flowers.EMPTY, flowers.YLW_M, flowers.EMPTY, flowers.YLW_M],
        [flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M],
        [flowers.ORG_C, flowers.EMPTY, flowers.ORG_C, flowers.EMPTY, flowers.ORG_C, flowers.EMPTY, flowers.ORG_C, flowers.YLW_M, flowers.EMPTY, flowers.YLW_M, flowers.EMPTY, flowers.YLW_M, flowers.EMPTY, flowers.YLW_M],
        [flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.ORG_C, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M, flowers.YLW_M]
    ],

    // STEP 3
    [
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C],
        [flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY],
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C],
        [flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY],
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C],
        [flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY, flowers.RED_M, flowers.WHT_M, flowers.EMPTY],
        [flowers.EMPTY, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C, flowers.EMPTY, flowers.RED_C, flowers.WHT_C]
    ],

    /* HYACINTHS AND TULIPS */

    // STEP 1
    [
        [flowers.EMPTY, flowers.RED_T, flowers.YLW_T, flowers.EMPTY, flowers.RED_T, flowers.YLW_T, flowers.EMPTY, flowers.RED_T, flowers.YLW_T],
        [flowers.RED_H, flowers.YLW_H, flowers.EMPTY, flowers.RED_H, flowers.YLW_H, flowers.EMPTY, flowers.RED_H, flowers.YLW_H, flowers.EMPTY],
        [flowers.EMPTY, flowers.RED_T, flowers.YLW_T, flowers.EMPTY, flowers.RED_T, flowers.YLW_T, flowers.EMPTY, flowers.RED_T, flowers.YLW_T],
        [flowers.RED_H, flowers.YLW_H, flowers.EMPTY, flowers.RED_H, flowers.YLW_H, flowers.EMPTY, flowers.RED_H, flowers.YLW_H, flowers.EMPTY],
        [flowers.EMPTY, flowers.RED_T, flowers.YLW_T, flowers.EMPTY, flowers.RED_T, flowers.YLW_T, flowers.EMPTY, flowers.RED_T, flowers.YLW_T],
        [flowers.RED_H, flowers.YLW_H, flowers.EMPTY, flowers.RED_H, flowers.YLW_H, flowers.EMPTY, flowers.RED_H, flowers.YLW_H, flowers.EMPTY],
        [flowers.EMPTY, flowers.RED_T, flowers.YLW_T, flowers.EMPTY, flowers.RED_T, flowers.YLW_T, flowers.EMPTY, flowers.RED_T, flowers.YLW_T]
    ],

    // STEP 2
    [
        [flowers.EMPTY, flowers.ORG_T, flowers.YLW_T, flowers.EMPTY, flowers.ORG_T, flowers.YLW_T, flowers.EMPTY, flowers.ORG_T, flowers.YLW_T],
        [flowers.ORG_H, flowers.YLW_H, flowers.EMPTY, flowers.ORG_H, flowers.YLW_H, flowers.EMPTY, flowers.ORG_H, flowers.YLW_H, flowers.EMPTY],
        [flowers.EMPTY, flowers.ORG_T, flowers.YLW_T, flowers.EMPTY, flowers.ORG_T, flowers.YLW_T, flowers.EMPTY, flowers.ORG_T, flowers.YLW_T],
        [flowers.ORG_H, flowers.YLW_H, flowers.EMPTY, flowers.ORG_H, flowers.YLW_H, flowers.EMPTY, flowers.ORG_H, flowers.YLW_H, flowers.EMPTY],
        [flowers.EMPTY, flowers.ORG_T, flowers.YLW_T, flowers.EMPTY, flowers.ORG_T, flowers.YLW_T, flowers.EMPTY, flowers.ORG_T, flowers.YLW_T],
        [flowers.ORG_H, flowers.YLW_H, flowers.EMPTY, flowers.ORG_H, flowers.YLW_H, flowers.EMPTY, flowers.ORG_H, flowers.YLW_H, flowers.EMPTY],
        [flowers.EMPTY, flowers.ORG_T, flowers.YLW_T, flowers.EMPTY, flowers.ORG_T, flowers.YLW_T, flowers.EMPTY, flowers.ORG_T, flowers.YLW_T]
    ],

    // STEP 3
    [
        [flowers.EMPTY, flowers.RED_T, flowers.RED_T, flowers.EMPTY, flowers.RED_T, flowers.WHT_T, flowers.EMPTY, flowers.RED_T, flowers.RED_T],
        [flowers.WHT_H, flowers.WHT_H, flowers.EMPTY, flowers.RED_H, flowers.WHT_H, flowers.EMPTY, flowers.WHT_H, flowers.WHT_H, flowers.EMPTY],
        [flowers.EMPTY, flowers.RED_T, flowers.RED_T, flowers.EMPTY, flowers.RED_T, flowers.WHT_T, flowers.EMPTY, flowers.RED_T, flowers.RED_T],
        [flowers.WHT_H, flowers.WHT_H, flowers.EMPTY, flowers.RED_H, flowers.WHT_H, flowers.EMPTY, flowers.WHT_H, flowers.WHT_H, flowers.EMPTY],
        [flowers.EMPTY, flowers.RED_T, flowers.RED_T, flowers.EMPTY, flowers.RED_T, flowers.WHT_T, flowers.EMPTY, flowers.RED_T, flowers.RED_T],
        [flowers.WHT_H, flowers.WHT_H, flowers.EMPTY, flowers.RED_H, flowers.WHT_H, flowers.EMPTY, flowers.WHT_H, flowers.WHT_H, flowers.EMPTY],
        [flowers.EMPTY, flowers.RED_T, flowers.RED_T, flowers.EMPTY, flowers.RED_T, flowers.WHT_T, flowers.EMPTY, flowers.RED_T, flowers.RED_T]
    ],

    /* ROSES AND LILIES */

    // STEP 1
    [
        [flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.EMPTY, flowers.YLW_R, flowers.YLW_R, flowers.YLW_R],
        [flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.YLW_R, flowers.EMPTY, flowers.YLW_R],
        [flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.EMPTY, flowers.YLW_R, flowers.YLW_R, flowers.YLW_R],
        [flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.EMPTY, flowers.EMPTY, flowers.YLW_R, flowers.EMPTY, flowers.YLW_R],
        [flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.EMPTY, flowers.YLW_R, flowers.YLW_R, flowers.YLW_R, flowers.YLW_R, flowers.YLW_R],
        [flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.YLW_R, flowers.EMPTY, flowers.YLW_R, flowers.EMPTY, flowers.YLW_R],
        [flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.EMPTY, flowers.YLW_R, flowers.YLW_R, flowers.YLW_R, flowers.YLW_R, flowers.YLW_R]
    ],

    // STEP 2
    [
        [flowers.EMPTY, flowers.PRP_R, flowers.YLW_R, flowers.EMPTY, flowers.PRP_R, flowers.YLW_R, flowers.EMPTY, flowers.PRP_R, flowers.YLW_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.PRP_R, flowers.YLW_R, flowers.EMPTY, flowers.PRP_R, flowers.YLW_R, flowers.EMPTY, flowers.PRP_R, flowers.YLW_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.PRP_R, flowers.YLW_R, flowers.EMPTY, flowers.PRP_R, flowers.YLW_R, flowers.EMPTY, flowers.PRP_R, flowers.YLW_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.PRP_R, flowers.YLW_R, flowers.EMPTY, flowers.PRP_R, flowers.YLW_R, flowers.EMPTY, flowers.PRP_R, flowers.YLW_R]
    ],

    // STEP 3A
    [
        [flowers.EMPTY, flowers.PRP_R, flowers.WHT_R, flowers.EMPTY, flowers.PRP_R, flowers.WHT_R, flowers.EMPTY, flowers.PRP_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.PRP_R, flowers.WHT_R, flowers.EMPTY, flowers.PRP_R, flowers.WHT_R, flowers.EMPTY, flowers.PRP_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.PRP_R, flowers.WHT_R, flowers.EMPTY, flowers.PRP_R, flowers.WHT_R, flowers.EMPTY, flowers.PRP_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.PRP_R, flowers.WHT_R, flowers.EMPTY, flowers.PRP_R, flowers.WHT_R, flowers.EMPTY, flowers.PRP_R, flowers.WHT_R]
    ],

    // STEP 3B

    // STEP 4
    [
        [flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R],
        [flowers.PRP_R, flowers.EMPTY, flowers.PRP_R, flowers.EMPTY, flowers.PRP_R, flowers.EMPTY, flowers.PRP_R, flowers.EMPTY, flowers.PRP_R],
        [flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R],
        [flowers.PRP_R, flowers.EMPTY, flowers.PRP_R, flowers.EMPTY, flowers.PRP_R, flowers.EMPTY, flowers.PRP_R, flowers.EMPTY, flowers.PRP_R],
        [flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R],
        [flowers.PRP_R, flowers.EMPTY, flowers.PRP_R, flowers.EMPTY, flowers.PRP_R, flowers.EMPTY, flowers.PRP_R, flowers.EMPTY, flowers.PRP_R],
        [flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R, flowers.PRP_R]
    ],

    // STEP 5
    [
        [flowers.EMPTY, flowers.BLK_R, flowers.WHT_R, flowers.EMPTY, flowers.BLK_R, flowers.WHT_R, flowers.EMPTY, flowers.BLK_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.BLK_R, flowers.WHT_R, flowers.EMPTY, flowers.BLK_R, flowers.WHT_R, flowers.EMPTY, flowers.BLK_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.BLK_R, flowers.WHT_R, flowers.EMPTY, flowers.BLK_R, flowers.WHT_R, flowers.EMPTY, flowers.BLK_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.BLK_R, flowers.WHT_R, flowers.EMPTY, flowers.BLK_R, flowers.WHT_R, flowers.EMPTY, flowers.BLK_R, flowers.WHT_R],
    ],

    // STEP 6
    [
        [flowers.EMPTY, flowers.RED_R, flowers.WHT_R, flowers.EMPTY, flowers.RED_R, flowers.WHT_R, flowers.EMPTY, flowers.RED_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.RED_R, flowers.WHT_R, flowers.EMPTY, flowers.RED_R, flowers.WHT_R, flowers.EMPTY, flowers.RED_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.RED_R, flowers.WHT_R, flowers.EMPTY, flowers.RED_R, flowers.WHT_R, flowers.EMPTY, flowers.RED_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.RED_R, flowers.WHT_R, flowers.EMPTY, flowers.RED_R, flowers.WHT_R, flowers.EMPTY, flowers.RED_R, flowers.WHT_R],
    ],

    // STEP 7
    [
        [flowers.EMPTY, flowers.ORG_R, flowers.WHT_R, flowers.EMPTY, flowers.ORG_R, flowers.WHT_R, flowers.EMPTY, flowers.ORG_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.ORG_R, flowers.WHT_R, flowers.EMPTY, flowers.ORG_R, flowers.WHT_R, flowers.EMPTY, flowers.ORG_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.ORG_R, flowers.WHT_R, flowers.EMPTY, flowers.ORG_R, flowers.WHT_R, flowers.EMPTY, flowers.ORG_R, flowers.WHT_R],
        [flowers.RED_L, flowers.YLW_L, flowers.EMPTY, flowers.RED_L, flowers.RED_L, flowers.EMPTY, flowers.RED_L, flowers.WHT_L, flowers.EMPTY],
        [flowers.EMPTY, flowers.ORG_R, flowers.WHT_R, flowers.EMPTY, flowers.ORG_R, flowers.WHT_R, flowers.EMPTY, flowers.ORG_R, flowers.WHT_R],
    ],

    // STEP 8
    [
        [flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R],
        [flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R],
        [flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R],
        [flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R],
        [flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R],
        [flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R, flowers.EMPTY, flowers.RED_R],
        [flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R, flowers.RED_R]
    ]

];

/* DRAW */
 
function drawImage() {
    for (var i = 0; i < canvas.length; i++) {
        var curr = layouts[i];
        for (var r = 0; r < rowTileCount; r++) {
            for (var c = 0; c < colTileCount; c++) {
                var tile = curr[r][c];
                var tileRow = (tile / imageNumTiles) | 0;
                var tileCol = (tile % imageNumTiles) | 0;
                ctx[i].drawImage(tilesetImage, (tileCol * imageTileSize), (tileRow * imageTileSize), imageTileSize, imageTileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
            }
        }
	}
}