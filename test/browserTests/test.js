const assert = require('assert')
require('geckodriver')
var webdriver = require('selenium-webdriver'), By = webdriver.By
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'firefox'}).build()


browser.get('http://localhost:3000')
var questionNumber = 1


function submitWithoutChoosingAnswer() {
    browser.findElement(By.id('submitQuestion')).click().then(function () {
        browser.findElement(By.className('submitQuestionError')).then(function (submitQuestionErrorElement) {
            submitQuestionErrorElement.getText().then(function (numberCircleText) {
                assert.equal(numberCircleText, 'Please select an answer')
                navigateBetweenAnswers()
            })
        })
    })
}

function navigateBetweenAnswers(){
    browser.findElement(By.id('answerInput5')).click().then(function () {
        browser.findElement(By.className('answerTextMarked')).then(function (markedAnswerTextElement) {
            markedAnswerTextElement.getAttribute('id').then(function (markedAnswerId) {
                assert.equal(markedAnswerId, 'answerText5')
                browser.findElement(By.id('answerInput4')).click().then(function () {
                    browser.findElement(By.className('answerTextMarked')).then(function (markedAnswerTextElement) {
                        markedAnswerTextElement.getAttribute('id').then(function (markedAnswerId) {
                            assert.equal(markedAnswerId, 'answerText4')
                            browser.findElement(By.id('answerInput3')).click().then(function () {
                                browser.findElement(By.className('answerTextMarked')).then(function (markedAnswerTextElement) {
                                    markedAnswerTextElement.getAttribute('id').then(function (markedAnswerId) {
                                        assert.equal(markedAnswerId, 'answerText3')
                                        browser.findElement(By.id('answerInput2')).click().then(function () {
                                            browser.findElement(By.className('answerTextMarked')).then(function (markedAnswerTextElement) {
                                                markedAnswerTextElement.getAttribute('id').then(function (markedAnswerId) {
                                                    assert.equal(markedAnswerId, 'answerText2')
                                                    clickAnswer()
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function submitAndMoveToNextQuestion() {
    questionNumber++
    testCurrentQuestionScreen(questionNumber)
}

function submitAndMoveToSummaryPage() {
    browser.findElement(By.id('submitQuestion')).click().then(function () {
        browser.findElements(By.className('generalTextColor')).then(function (generalTextColorElements) {
            generalTextColorElements.forEach(function (element, index) {
                element.getText().then(function (elementText) {
                    switch (index) {
                        case 1:
                            assert.equal(elementText, 'Question number: 1, Your answer: 1, Correct answer: 3✖')
                            break
                        case 2:
                            assert.equal(elementText, 'Question number: 2, Your answer: 1, Correct answer: 5✖')
                            break
                        case 3:
                            assert.equal(elementText, 'Question number: 3, Your answer: 1✔')
                            break
                        case 4:
                            assert.equal(elementText, 'Question number: 4, Your answer: 1, Correct answer: 4✖')
                            break
                        case 5:
                            assert.equal(elementText, 'Question number: 5, Your answer: 1, Correct answer: 4✖')
                            console.log('finished!')
                            browser.quit()
                            break
                        default:
                            break
                    }
                })
            })
        })
    })
}

function clickAnswer() {
    browser.findElement(By.id('answerInput1')).click().then(function () {
        browser.findElement(By.className('answerTextMarked')).then(function (markedAnswerTextElement) {
            markedAnswerTextElement.getAttribute('id').then(function(markedAnswerId){
                assert.equal(markedAnswerId, 'answerText1')
                if(questionNumber < 5){
                    browser.findElement(By.id('submitQuestion')).click().then(function () {
                        submitAndMoveToNextQuestion()
                    })
                }
                else {
                    submitAndMoveToSummaryPage()
                }
            })
        })
    })
}

function testCurrentQuestionScreen() {
    browser.findElement(By.className('navbarCurrentQuestion')).then(function (numberCircleElement) {
        numberCircleElement.getText().then(function (numberCircleText) {
            assert.equal(numberCircleText, questionNumber)
            browser.findElements(By.className('answerTextMarked')).then(function (markedAnswerElements) {
                assert.equal(markedAnswerElements, 0)
                if (questionNumber === 1) {
                    submitWithoutChoosingAnswer()
                }
                else {
                    clickAnswer()
                }
            })
        })
    })
}
testCurrentQuestionScreen(questionNumber)