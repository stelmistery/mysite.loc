<?php


namespace App\Controllers\Validation;
use Core\Controller;
use Core\View;

class TestFormValidationController extends Controller
{

    public function isNotEmpty($data)
    {
        if ($data['FIO'] == '') {
            return false;
        } elseif ($data['group'] == '') {
            return false;
        } elseif ($data['quest1'] == '') {
            return false;
        } elseif ($data['quest2'] == '') {
            return false;
        } elseif ($data['quest3'] == '') {
            return false;
        } else {
            return true;
        }

    }

    public function isFio($data)
    {
        $regexp = '/[а-я]+\s[а-я]+\s[а-яё]+/ui';
        if (preg_match($regexp, $data['FIO'])) {
            return true;
        } else {
            return false;
        }
    }

    public function isQuest1($data)
    {
        $regxp = '/[а-яёa-z]+/ui';
        if (preg_match($regxp, $data['quest1'])){
            return true;
        } else {
            return false;
        }
    }

    public function verQuest2($data)
    {
        if ($data['quest2'] != 'b'){
            return false;
        } else {
            return true;
        }

    }

    public function verQuest3($data)
    {
        if ($data['quest3'] != 'A'){
            return false;
        }
        return true;
    }

    public function isValidate()
    {
        $paramVal = [];

        if (!$this->isNotEmpty($_POST)){
            View::renderTemplate('Home/test.html.twig', ['nonValAll' => 'Ты что-то забыл, бро']);
        } else {
            if (!$this->isFio($_POST)){
                $paramVal[] = 'Неверное ФИО';
            }
            if (!$this->verQuest2($_POST)){
                $paramVal[] = 'Вопрос 2: ответ неверный';
            }
            if (!$this->verQuest3($_POST)){
                $paramVal[] = 'Вопрос 3: ответ неверный';
            }
            if ($paramVal) {
                View::renderTemplate('Home/test.html.twig', ['nonVal' => $paramVal]);
            } else {
                View::renderTemplate('Home/test.html.twig', ['hasVal' => 'ты прошёл тест, бро!']);
            }

        }
    }

}