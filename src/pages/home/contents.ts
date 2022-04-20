import Image2011 from 'assets/2011.jpg';
import Image2013 from 'assets/2013.jpg';
import Image2015 from 'assets/2015.jpg';
import Image2016 from 'assets/2016.jpg';
import Image2018 from 'assets/2018.jpg';
import Image2019 from 'assets/2019.jpg';
import Image2020 from 'assets/2020.jpg';

interface Content {
  year: number;
  boxContent: {
    header?: string;
    body: string;
  };
  imgUrl?: string;
  mainContent?: string;
}

export const contents: Content[] = [
  {
    year: 2011,
    boxContent: {
      header: 'PEC 76/2011, Author - Blairo Maggi (PR-MT)',
      body: 'Amendment to articles 176 and 231 of the Federal Constitution to give congress the decision making power to explore water resources on indigenous lands. The constitutional amendment bill proposes to offer indigenous peoples “participation in the exploitation of the potential of hydraulic energy” on their lands, as well as “in the mining of mineral resources',
    },
    imgUrl: Image2011,
    mainContent:
      'In the early morning of 18 November 2011, some 40 gunmen arrived at a Guarani-Kaiowá indigenous encampment in Mato Grosso do Sul State, and shot tribal leader Nísio Gomes before dragging him away. Gomes’ body and three indigenous children abducted during the attack have not been seen since. A private security company, Gaspem Segurança, was implicated in the death of Gomes and another indigenous leader, Dorvalino Rocha. The same organization was found to have been responsible for burning indigenous houses, and kidnapping and beating indigenous people from 2009 to 2011.',
  },
  {
    year: 2012,
    boxContent: {
      header: 'PL 3722/2012, Author -  Rogério Peninha Mendonça (PMDB-SC)',
      body: 'The bill establishes new rules for the acquisition, possession, and circulation of firearms and ammunition, imposing penalties and taking related measures. It brings together approximately one hundred similar PLs, among them PLs 4134/2015 and 8153/2017 that aim to facilitate the access to firearms in rural areas.',
    },
    mainContent:
      'In 2012, while Osvalinda Osvalinda Maria Alves Pereira, a well known human rights defender from Pará state, was receiving medical treatment at a hospital in the city of Santarém, a woman she did not know casually told her that loggers had agreed to contribute 3000 reais (about US$770) each to pay for the killing of four activists. The woman said the targets were two of Osvalinda’s neighbors, Osvalinda’s husband Daniel Alves Pereira, and Osvalinda herself. The day Daniel brought Osvalinda home from the hospital, the couple found a group of about 12 loggers waiting at their house accompanied by a contingent of armed men who threatened them with death for defending Areia, an agrarian reform settlement adjacent to forest reserves exploited by illegal logging.',
  },
  {
    year: 2013,
    boxContent: {
      header: 'PDC 1300/2013, Author - Nilson Leitão (PSDB-MT)',
      body: 'Draft legislative decree to suspend the prerogative of FUNAI to act in environmental licensing processes, undertakings or activities that affect the land of indigenous peoples and their surroundings, that is, it tries to weaken the protection of indigenous areas.',
    },
    imgUrl: Image2013,
    mainContent:
      'Rural producers in the state of Mato Grosso do Sul held an event to raise money to fight against Indigenous land claims. Known as the ‘Leilao da Resistencia’ (‘Resistance Auction’), the event raised some 640,000 Brazilian Reais by selling cattle and grain and was attended by Ruralista politicians: Ronaldo Caiado (DEM), Katia Abreu (PSD), Ze Teixeira (DEM), Carlos Marun (MDB), Waldemir Moka (PMDB), Luiz Henrique Mandetta (DEM) (President Bolsonaro’s current Minister of Health), Reinaldo Azambuja (PSDB), Fabio Trad (PDMB), and Tereza Cristina (DEM) (President Bolsonaro’s current Minister of Agriculture). According to the organizer, Francisco Maia, president of the State Breeders Association (Acrissul), the objective of the event was to fight against Indigenous land claims by funding mobilization actions, logistics, attorneys’ fees, publicity, and security.',
  },
  {
    year: 2014,
    boxContent: {
      header: 'PDC 1465/2014, Author - Nilson Leitão (PSDB-MT)',
      body: 'Draft legislative decree to establish as the exclusive delegation of IBAMA the granting of environmental licensing. PDC 1465 suspends Ordinance 419/11, edited jointly by the ministries of the Environment, Justice, Culture and Health which states that the National Indian Foundation (Funai), the Palmares Cultural Foundation (FCP), the National Historical and Artistic Heritage Institute (Iphan) and the Ministry of Health must also participate in the environmental licensing processes, effectively facilitating agribusiness projects.',
    },
    mainContent:
      'Brazil was again the worst-affected country with 29 killings (4 indigenous), most related to the conflict over the ownership, control, and use of land. On 21 February 2014, community leader Raimundo Rodrigues da Silva was shot in Maranhão State. On the night in 2014, along a dirt track that loggers had opened in the Alto Turiaçu Indigenous Territory, ten members of the Ka’apor forest patrol found five illegal loggers at work, reported Mutuhiran Ka’apor, a forest guardian. The loggers repeatedly shot at the guardians, injuring three.',
  },
  {
    year: 2015,
    boxContent: {
      header: 'RCP 16/2015, Author – Alceu Moreira (PMDB-RS)',
      body: 'Parliamentary Commission of Inquiry (CPI) for  investigating the performance of FUNAI and National Institute of Colonization and Agrarian Reform (INCRA) in the demarcation of indigenous and quilombola territories. Along with PEC 215/2000, the long-term and ongoing attempt to amend the Brazilian constitution to give congress sole authority and final say on demarcating existing and new indigenous and quilombola land, the CPI constitutes a part of a sustained legal attack against the rights and organizations of indigenous and quilombola communities.',
    },
    imgUrl: Image2015,
  },
  {
    year: 2016,
    boxContent: {
      header: 'PL 5843/2016, author – Lucio Mosquini (PMDB-RO)',
      body: 'Regulates the provisions of item II of article 20 of the Federal Constitution. Vacant land in the union to be allocated by the states for urban occupation, agricultural and extractive activities, and actions compatible with agricultural policy and agrarian reform. The PL has a particular focus on claiming land particularly in border areas under the pretense of national security. ',
    },
    imgUrl: Image2016,
    mainContent:
      'In 2016, the ‘ruthless scramble for the Amazon’s natural wealth makes Brazil, once again, the world’s deadliest country in terms of sheer numbers killed, 49, roughly one-third indigenous. The logging industry was linked to 16 murders, while landowners were the suspected perpetrators of many killings in the Amazon. In June 2016 public health worker Clodiodi Aquileu Rodrigues de Souza was shot and killed and six indigenous persons were injured in the municipality of Carapo in the state of Mato Grosso do Sul. The body of Nilce de Souza Magalhães was found tied to a rock and washed up on the shore of the Madeira River in Rondônia State in July 2016. Two of Nilce’s colleagues, Lurdilane Gomes da Silva and Iza Cristina Bello, have received death threats.',
  },
  {
    year: 2017,
    boxContent: {
      header: 'PL 8107/2017, author - Executive branch',
      body: 'Bill introduced to shrink Jamanxim National Forest in the state of Pará by 27%, or 349,000 hectares. Critics consider this bill as President Temer striking a reconciliatory tone to cultivate support from the “ruralista” network as in June, he vetoed MP 756 and 758, two measures that reduced protected areas and turned them into areas of environmental protection, where paradoxically private land ownership, ranching, agriculture, livestock, and mining activities are permitted. ',
    },
    mainContent:
      'At sunset on 19 April 2017, four members of a group of killers-for-hire known as ‘the hooded ones’, including a former military police officer, indiscriminately murdered nine people in a settlement in Taquaruçu do Norte, according to state prosecutors. Taquaruçu do Norte is in the Colniza municipality of Mato Grosso State. The killers tied up and cut the throats of Francisco Chaves da Silva, Edson Alves Antunes, Izaul Brito dos Santos, and Valmir Rangel do Nascimento; stabbed to death Ezequias Santos de Oliveira, and Sebastião Ferreira de Souza; and shot dead Aldo Aparecido Carlini, Fabio Rodriques dos Santos, and Samuel da Cunha. Prosecutors charged Valdelir João de Souza, owner of two nearby logging companies, with ordering the killings to scare away the 300 families of subsistence farmers who lived in the area, so that he could take over the land and harvest the timber.',
  },
  {
    year: 2018,
    boxContent: {
      body: 'Jair Bolsonaro is elected as president of Brazil and pledges to open indigenous reserves to commercial development, including mining, agriculture, and infrastructure.',
    },
    imgUrl: Image2018,
    mainContent:
      'In January 2018, a local small farmer, Romar ‘Polaquinho’ Roglin, told de Melo that he was going to report illegal logging to the police. Twenty days later, Polaquinho was killed. His brother, Ricardo Roglin, who lived in the nearby town of Novo Progresso, told residents of the Terra Nossa settlement that he intended to bring Polaquinho’s killers to justice. On 13 July 2018, Ricardo Roglin was killed. In April 2018, Quilombola leader Nazildo dos Santos Brito was killed in Pará State following threats to his physical safety after protesting a palm oil plantation’s alleged illegal deforestation and pollution practices. On 11 August 2018, indigenous leader Jorge Guajajara was killed in Maranhão.In December 2018, Gilson Temponi, president of an association of farmers in three INCRA settlements in Placas, Pará State was killed after reporting illegal logging.',
  },
  {
    year: 2019,
    boxContent: {
      header: 'MP 870, author - Executive branch',
      body: 'On January 1, on the first day of his presidency, Jair Bolsonaro issued a provisional measure to shift decision making power over indigenous land demarcations from FUNAI to the ministry of agriculture.',
    },
    imgUrl: Image2019,
    mainContent:
      'On 1 November 2019, two members of a 120-member volunteer group from the Guajarara People known as the ‘Guardians of the Forest’, leader Paulo Paulino Guajajara was killed. A few weeks later, on 7 December 2019, an unidentified gunman shot and killed two Indigenous leaders, Firmino Prexede Guajajara and Raimundo Guajarara. The victims were coming back from a meeting with FUNAI, where they had been advocating in defense of their rights. Indigenous leaders of Guajajara villages and other guardians also reported death threats.',
  },
  {
    year: 2020,
    boxContent: {
      body: 'Between March and May 2020, President Bolsonaro’s government passes 159 acts (ordinances, normative instructions, decrees and other measures), which critics say are indirectly designed to weaken regulations and rollback environmental protection.',
    },
    imgUrl: Image2020,
    mainContent:
      'Global Witness reported that 20 land and environmental defenders were murdered in 2020. This included three ribeirinhos and eight Indigenous people. Other victims included: Carlos Augusto Gomes (a rural worker shot dead in Rio de Janeiro); Claudomir Bezerra de Freitas (murdered in Rio Branco); Damião Cristino de Carvalho Junior (a guard at the Intervales State Park in the state of São Paulo, who died in a confrontation between the Environmental Police and miners); Fernando Ferreira da Rocha (a lawyer who was murdered in Amazonas); Raimundo Paulino da Silva Filho (a former councilor who acted as a community leader, he was murdered in Pará); Raimundo Nonato Batista Costa (a rural worker found dead in Maranhão); and Celino Fernandes and Wanderson de Jesus Rodrigues Fernandes (a father and son assassinated in Maranhão',
  },
];
