/**
 * 2022 개정 교육과정 고교 선택과목 수요 분석기
 * Google Apps Script Web App 엔트리포인트
 */

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('2022 개정 교육과정 고교 선택과목 수요 분석기')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

/**
 * 필요 시 구글 스프레드시트 컨테이너 바인딩 메뉴 추가
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📊 선택과목 분석기')
    .addItem('웹앱 열기', 'openWebAppModal')
    .addToUi();
}

function openWebAppModal() {
  const html = HtmlService.createHtmlOutputFromFile('index')
    .setWidth(1200)
    .setHeight(800);
  SpreadsheetApp.getUi().showModalDialog(html, '선택과목 수요 분석 및 학급 수 산출');
}
