import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user : User = new User();
  public basicAttrFlag : boolean = false;
  public combatAttrFlag : boolean = false;
  public skillsAttrFlag : boolean = false;
  public traitsFlag : boolean = false;
  public skillsListFlag : boolean = false;
  public skillStrengthFlag : boolean = false;
  public skillDexterityFlag : boolean = false;
  public skillMindFlag : boolean = false;
  public skillPresenceFlag : boolean = false;
  public armorChoices : any = [];
  public selectedArmorChoice: number = 0;
  public weaponChoices : any = [];
  public selectedWeaponChoice: number = 0;
  constructor() { }

  ngOnInit() {
    // initializing User character
    this.user.id = 1;
    this.user.character_name = "player 1";
    this.user.damage = 0;
    this.user.base_attributes.dexterity = 0;
    this.user.base_attributes.strength = 0;
    this.user.base_attributes.mind = 0;
    this.user.base_attributes.presence = 0;
    this.user.combat_attributes.vitality = this.user.base_attributes.strength + 3;
    this.user.combat_attributes.evasion = this.user.base_attributes.dexterity + 10;
    this.user.combat_attributes.armor = this.user.combat_attributes.evasion;
    this.user.combat_attributes.alacrity = this.user.base_attributes.dexterity + this.user.base_attributes.mind;
    this.user.combat_attributes.tenacity = this.user.base_attributes.presence + 1;
    this.user.combat_attributes.power = 0;
    this.user.skills.strength.fighting.value = this.user.base_attributes.strength;
    this.user.skills.dexterity.fighting.value = this.user.base_attributes.dexterity;
    this.user.skills.dexterity.thievery.value = this.user.base_attributes.dexterity;
    this.user.skills.dexterity.stealth.value = this.user.base_attributes.dexterity;
    this.user.skills.dexterity.archery.value = this.user.base_attributes.dexterity;
    this.user.skills.mind.learned.value = this.user.base_attributes.mind;
    this.user.skills.mind.survival.value = this.user.base_attributes.mind;
    this.user.skills.mind.perception.value = this.user.base_attributes.mind;
    this.user.skills.mind.apothecary.value = this.user.base_attributes.mind;
    this.user.skills.mind.power.value = this.user.base_attributes.mind;
    this.user.skills.presence.intimidation.value = this.user.base_attributes.presence;
    this.user.skills.presence.performance.value = this.user.base_attributes.presence;
    this.user.skills.presence.manipulation.value = this.user.base_attributes.presence;
    this.user.skills.presence.insight.value = this.user.base_attributes.presence;
    this.user.skills.presence.power.value = this.user.base_attributes.presence;
    //----------------------------------------------------------------------------
    this.weaponChoices = [
      {
        "name":"Yes",
        "value":1
      },
      {
        "name":"No",
        "value":0
      }
    ]
    this.armorChoices = this.weaponChoices;
  }

  // Updation of all basic attributes dependent skills
  updateStrengthBasedSkills(){
    this.user.combat_attributes.vitality = this.user.base_attributes.strength + 3;
    this.user.skills.strength.fighting.value = this.user.base_attributes.strength;
  }

  updateDexterityBasedSkills(){
    this.user.combat_attributes.evasion = this.user.base_attributes.dexterity + 10;
    this.user.combat_attributes.alacrity = this.user.base_attributes.dexterity + this.user.base_attributes.mind;
    this.user.combat_attributes.armor = this.user.combat_attributes.evasion;
    this.user.skills.dexterity.fighting.value = this.user.base_attributes.dexterity;
    this.user.skills.dexterity.thievery.value = this.user.base_attributes.dexterity;
    this.user.skills.dexterity.stealth.value = this.user.base_attributes.dexterity;
    this.user.skills.dexterity.archery.value = this.user.base_attributes.dexterity;
  }

  updateMindBasedSkills(){
    this.user.combat_attributes.alacrity = this.user.base_attributes.dexterity + this.user.base_attributes.mind;
    this.user.skills.mind.learned.value = this.user.base_attributes.mind;
    this.user.skills.mind.survival.value = this.user.base_attributes.mind;
    this.user.skills.mind.perception.value = this.user.base_attributes.mind;
    this.user.skills.mind.apothecary.value = this.user.base_attributes.mind;
    this.user.skills.mind.power.value = this.user.base_attributes.mind;
  }

  updatePresenceBasedSkills(){
    this.user.combat_attributes.tenacity = this.user.base_attributes.presence + 1;
    this.user.skills.presence.intimidation.value = this.user.base_attributes.presence;
    this.user.skills.presence.performance.value = this.user.base_attributes.presence;
    this.user.skills.presence.manipulation.value = this.user.base_attributes.presence;
    this.user.skills.presence.insight.value = this.user.base_attributes.presence;
    this.user.skills.presence.power.value = this.user.base_attributes.presence;
  }
  //---------------------------------------------------------------------------------

  damageMinus(){
    if(this.user.damage > 0){
      if(this.user.base_attributes.strength < 5){
        this.user.damage--;
        this.user.base_attributes.strength = this.user.base_attributes.strength + 1;
        this.user.combat_attributes.vitality = this.user.combat_attributes.vitality +1;
      }else{
        alert("Strength and Vitality is already at highest level")
      }
    }
  }

  damagePlus(){
    if(this.user.base_attributes.strength > 0){
      this.user.damage++;
      this.user.base_attributes.strength = this.user.base_attributes.strength - 1;
      this.user.combat_attributes.vitality = this.user.combat_attributes.vitality -1;
    }else{
      alert("Strength and Vitality is already at lowest level")
    }
  }

  attributesOnClick(value){
    if(value == "basic"){
      this.basicAttrFlag = true;
      this.combatAttrFlag = false;
      this.skillsAttrFlag = false;
      this.traitsFlag = false;
      this.skillsListFlag = false;
    }else if(value == "combat"){
      this.basicAttrFlag = false;
      this.combatAttrFlag = true;
      this.skillsAttrFlag = false;
      this.traitsFlag = false;
      this.skillsListFlag = false;
    }else if(value == "skills"){
      this.basicAttrFlag = false;
      this.combatAttrFlag = false;
      this.skillsAttrFlag = true;
      this.traitsFlag = false;
      this.skillsListFlag = true;
    }else if(value == "traits"){
      this.basicAttrFlag = false;
      this.combatAttrFlag = false;
      this.skillsAttrFlag = false;
      this.traitsFlag = true;
      this.skillsListFlag = false;
    }

  }

  subAttributesOnClick(value){
    if(value == "strength"){
      this.skillStrengthFlag = true;
      this.skillDexterityFlag = false;
      this.skillMindFlag = false;
      this.skillPresenceFlag = false;
    }else if(value == "dexterity"){
      this.skillStrengthFlag = false;
      this.skillDexterityFlag = true;
      this.skillMindFlag = false;
      this.skillPresenceFlag = false;
    }else if(value == "mind"){
      this.skillStrengthFlag = false;
      this.skillDexterityFlag = false;
      this.skillMindFlag = true;
      this.skillPresenceFlag = false;
    }else if(value == "presence"){
      this.skillStrengthFlag = false;
      this.skillDexterityFlag = false;
      this.skillMindFlag = false;
      this.skillPresenceFlag = true;
    }
  }

  strengthMinus(){
    if(this.user.base_attributes.strength > 0){
      this.user.base_attributes.strength = this.user.base_attributes.strength - 1;
      this.updateStrengthBasedSkills();
    }else{
      alert("Strength is already at Lowest Level")
    }
  }

  strengthPlus(){
    if(this.user.base_attributes.strength < 5){
      this.user.base_attributes.strength = this.user.base_attributes.strength + 1;
      this.updateStrengthBasedSkills();
    }else{
      alert("Strength is already at Highest Level")
    }
  }

  dexterityMinus(){
    if(this.user.base_attributes.dexterity > 0){
      this.user.base_attributes.dexterity = this.user.base_attributes.dexterity - 1;
      this.updateDexterityBasedSkills();
    }else{
      alert("Dexterity is already at Lowest Level")
    }
  }

  dexterityPlus(){
    if(this.user.base_attributes.dexterity < 5){
      this.user.base_attributes.dexterity = this.user.base_attributes.dexterity + 1;
      this.updateDexterityBasedSkills();
    }else{
      alert("Dexterity is already at Highest Level")
    }
  }

  mindMinus(){
    if(this.user.base_attributes.mind > 0){
      this.user.base_attributes.mind = this.user.base_attributes.mind - 1;
      this.updateMindBasedSkills();
    }else{
      alert("Mind is already at Lowest Level")
    }
  }

  mindPlus(){
    if(this.user.base_attributes.mind < 5){
      this.user.base_attributes.mind = this.user.base_attributes.mind + 1;
      this.updateMindBasedSkills();
    }else{
      alert("Mind is already at Highest Level")
    }
  }

  presenceMinus(){
    if(this.user.base_attributes.presence > 0){
      this.user.base_attributes.presence = this.user.base_attributes.presence - 1;
      this.updatePresenceBasedSkills();
    }else{
      alert("Presence is already at Lowest Level")
    }
  }

  presencePlus(){
    if(this.user.base_attributes.presence < 5){
      this.user.base_attributes.presence = this.user.base_attributes.presence + 1;
      this.updatePresenceBasedSkills();
    }else{
      alert("Presence is already at Highest Level")
    }
  }

  tenacityMinus(){
    if(this.user.combat_attributes.tenacity > 1){
      this.user.combat_attributes.tenacity = this.user.combat_attributes.tenacity - 1;
      this.user.base_attributes.presence = this.user.base_attributes.presence - 1;
      this.updatePresenceBasedSkills();
    }else{
      alert("Cannot Use this. Tenacity is at Lowest Level")
    }
  }

  tenacityPlus(){
    if(this.user.combat_attributes.tenacity < 6){
      this.user.combat_attributes.tenacity = this.user.combat_attributes.tenacity + 1;
      this.user.base_attributes.presence = this.user.base_attributes.presence + 1;
      this.updatePresenceBasedSkills();
    }else{
      alert("Cannot Recieve more. Tenacity is at Highest Level")
    }
  }

  getRank(val){
    if(val == 0){
      return 'Untrained';
    }else if(val == 1){
      return 'Novice';
    }else if(val == 2){
      return 'Apprentice';
    }else if(val == 3){
      return 'Adept';
    }else if(val == 4){
      return 'Expert';
    }else if(val == 5){
      return 'Master';
    }
  }

  generateValue(val){
    let min = 1;
    let max = 20;
    min = Math.ceil(min);
    max = Math.floor(max);
    if(val == 0){
      let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
      let num2 = Math.floor(Math.random() * (max - min + 1)) + min;
      if (num1 < num2){
        alert("Generated Value for skill according to Rank is " + num1);
      }else{
        alert("Generated Value for skill according to Rank is " + num2);
      }
    }else{
      let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
      let max2 = (4 + (val-1) * 2);
      let num2 = Math.floor(Math.random() * (max2 - min + 1)) + min;
      let res = num1 + num2;
      alert("Generated Value for skill according to Rank is " + res);
    }
  }

  onChangeArmor(e){
    this.selectedArmorChoice = e.target.value;
    if(e.target.value == 1){
      this.user.base_attributes.dexterity++;
      this.updateDexterityBasedSkills();
    }else if(e.target.value == 0){
      if(this.user.base_attributes.dexterity > 0){
        this.user.base_attributes.dexterity--;
        this.updateDexterityBasedSkills();
      }
    }
  }

  onChangeWeapon(e){
    this.selectedWeaponChoice = e.target.value;
    if(e.target.value == 1){
      this.user.base_attributes.strength++;
      this.updateStrengthBasedSkills();
    }else if(e.target.value == 0){
      if(this.user.base_attributes.strength > 0){
        this.user.base_attributes.strength--;
        this.updateStrengthBasedSkills();
      }
    }
  }

  export(){
    window.print()
  }
}
