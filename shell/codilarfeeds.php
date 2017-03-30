<?php
require_once 'abstract.php';

class Codilar_Feeds extends Mage_Shell_Abstract
{
  public function run()
  {
      try {
          if($this->getArg("id") && is_numeric($this->getArg("id")) && $this->getArg("type") && !empty($this->getArg("type"))){
              $type = $this->getArg("type");
              $id = $this->getArg("id");
              Mage::getModel('feeds/type_'.$type)->process($id);
              Mage::log("feeds generated for $type and $id",null,'codilar_feeds.log');
          }
      }catch(Exception $e){
          Mage::log($e->getMessage(),null,'codilar_feeds.log');
      }
  }
}

$shell = new Codilar_Feeds();
$shell->run();