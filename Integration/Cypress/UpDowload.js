/// <reference types="Cypress" />
describe("Handling file upload", function () {
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it.skip('Upload files', function () {
        const filename = 'example.json'
        cy.fixture('example.json').then(function (fileContent) {
            cy.get('#file-upload').selectFile('cypress/fixtures/images/error.png')
            cy.get('#file-submit').click()

        })
    })
    it.skip('uploading', function () {
        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/images/error.png', {
            action: 'drag-drop'
        })
        cy.get('#file-submit').click()
    })


    //     it.only('Download files', function () {
    //         //cy.visit("https://the-internet.herokuapp.com/download")
    //       cy.contains("File Download").click()
    //   cy.downloadFile('https://the-internet.herokuapp.com/download','C:\Users\srikanth.golusula\Downloads\cypressdownload','Selenium.docx')

    //     })
    it.only('File download using cypress-file-upload npm package', () => {

        //const filepath = 'Downloads/upload_file'

        cy.get("a[href='/download']").click()

        cy.downloadFile('https://the-internet.herokuapp.com/download', 'C:/Users/srikanth.golusula/Downloads/cypressdownload', 'Selenium.docx')





    })

})