<?php


namespace App\Controllers\Validation;

//TODO: подучить регулярки

use Core\Controller;
use Core\View;

class FormValidationController extends Controller
{


    public function isNotEmpty($data)
    {
        if ($data['FIO'] == '') {
            return false;
        } elseif ($data['sex'] == '') {
            return false;
        } elseif ($data['birthday'] == '') {
            return false;
        } elseif ($data['age'] == '') {
            return false;
        } elseif ($data['e-mail'] == '') {
            return false;
        } elseif ($data['phone'] == '') {
            return false;
        } else {
            return true;
        }
    }

    public function isPhone($data)
    {
        $regexp = '/[+]{1}[0-9]{11}/';
        if (preg_match($regexp, $data['phone'])) {
            return true;
        } else {
            return false;
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

    public function isEmail($data)
    {
        $regexp = '/[a-z]+[@]{1}[a-z]+[.][a-z]+/';
        if (preg_match($regexp, $data['e-mail'])) {
            return true;
        } else {
            return false;
        }
    }

    /*
        public function isValidate()
        {
            $paramVal = [];

            if (!$this->isNotEmpty($_POST)) {
                View::renderTemplate('Home/contact.html.twig', ['nonValAll' => 'Ты что-то забыл, бро']);
            } else {
                switch (false) {
                    case ($this->isFio($_POST)):
                        $paramVal[] = "Введите ФИО корректо";
                    case ($this->isPhone($_POST)):
                        $paramVal[] = "Телефон введён не правильно";
                    case ($this->isEmail($_POST)):
                        $paramVal[] = "Неверный E-Mail";
                }
                if (isset($paramVal)) {
                    View::renderTemplate('Home/contact.html.twig', ['nonVal' => $paramVal]);
                } else {
                    View::renderTemplate('Home/contact.html.twig', ['hasVal' => 'Теперь твои данные у меня :p']);
                }
            }
        }*/

    public function isValidate()
    {
        $paramVal = [];

        if (!$this->isNotEmpty($_POST)) {
            View::renderTemplate('Home/contact.html.twig', ['nonValAll' => 'Ты что-то забыл, бро']);
        } else {
            if (!$this->isFio($_POST)) {
                $paramVal[] = "Неверное ФИО";
            }
            if (!$this->isPhone($_POST)) {
                $paramVal[] = "Неверный номер";
            }
            if (!$this->isEmail($_POST)) {
                $paramVal[] = "Неверный E-Mail";
            }
            if ($paramVal) {
                View::renderTemplate('Home/contact.html.twig', ['nonVal' => $paramVal]);
            } else {
                View::renderTemplate('Home/contact.html.twig', ['hasVal' => 'Ваши данные захвачены!']);
            }
        }
    }
}