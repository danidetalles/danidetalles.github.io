
document.documentElement.classList.add('js');
var h=document.getElementById('top'),b=document.getElementById('bg'),m=document.getElementById('mn');
addEventListener('scroll',function(){h.classList.toggle('sc',scrollY>10)},{passive:true});
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add('in')})}

var catalogModal=document.getElementById('catalogModal');
var catalogItems=document.getElementById('catalogItems');
var catalogTitle=document.getElementById('catalogTitle');
var catalogDescription=document.getElementById('catalogDescription');
var catalogClose=document.getElementById('catalogClose');
var catalogData={
  flores:{
    title:'Flores eternas y ramos',
    description:'Ramos artesanales hechos a mano para regalar en cumpleaños, aniversarios y momentos especiales.',
    items:[
      {name:'Ramo artesanal rosado',desc:'Ramo de flores hechas a mano, presentado en envoltura delicada en tonos rosa y crema.',photo:'assets/img/img_8ecea11035ac.jpg',msg:'Quiero consultar el ramo artesanal rosado'},
      {name:'Ramo de tulipanes',desc:'Una combinación de tulipanes rosados y morados con pequeñas flores blancas.',photo:'assets/img/img_7b6b5e4f0e85.jpg',msg:'Quiero consultar el ramo de tulipanes'},
      {name:'Ramo de rosas eternas',desc:'Rosas rosadas con una presentación especial, ideal para sorprender y conservar el recuerdo.',photo:'assets/img/img_1c30909b166b.jpg',msg:'Quiero consultar el ramo de rosas eternas'}
    ]
  },
  regalos:{
    title:'Regalos personalizados',
    description:'Tres ideas reales de regalos personalizados preparados por Dani Detalles.',
    items:[
      {name:'Arreglo sorpresa con dulces',desc:'Arreglo de dulces y chocolates, presentado con globos y una dedicatoria especial.',photo:'assets/img/img_e904ecadfdef.jpg',msg:'Quiero consultar el arreglo sorpresa con dulces'},
      {name:'Caja sorpresa Hot Wheels',desc:'Regalo temático con dulces, motocicletas y una copa de recuerdo.',photo:'assets/img/img_d6fdd7ca2cba.jpg',msg:'Quiero consultar la caja sorpresa Hot Wheels'},
      {name:'Canasta de dulces',desc:'Canasta decorada con snacks y chocolates, lista para regalar.',photo:'assets/img/img_3f0537e604c4.jpg',msg:'Quiero consultar la canasta de dulces'}
    ]
  },
  munecos:{
    title:'Muñequitos y llaveros',
    description:'Llaveros y muñequitos artesanales hechos a mano con limpiapipas.',
    items:[
      {name:'Llaveros de perritos',desc:'Muñequitos tejidos a mano con forma de perritos.',photo:'assets/img/img_89f7da911545.jpg',msg:'Quiero consultar los llaveros de perritos'},
      {name:'Ramos de flores de limpiapipas',desc:'Flores artesanales de colores, convertidas en llaveros decorativos.',photo:'assets/img/img_0ddc03558d10.jpg',msg:'Quiero consultar los llaveros de flores'},
      {name:'Pollito con gorro de rana',desc:'Llavero artesanal de pollito amarillo con gorrito verde de rana.',photo:'assets/img/img_1a87e66d0623.jpg',msg:'Quiero consultar el llavero de pollito'}
    ]
  },
  tarjetas:{
    title:'Tarjetas y dedicatorias',
    description:'Dos muestras de tarjetas y dedicatorias personalizadas.',
    items:[
      {name:'Tarjeta de cumpleaños Mi Mary',desc:'Tarjeta rosada con dedicatoria de cumpleaños personalizada.',photo:'assets/img/img_f4113b7c2d8c.jpg',msg:'Quiero consultar tarjeta personalizada para cumpleaños'},
      {name:'Tarjeta Hot Wheels – Niño interior',desc:'Tarjeta temática de Hot Wheels con un mensaje especial: “Siempre haré feliz a tu niño interior”.',photo:'assets/img/img_91ea514d9580.jpg',msg:'Quiero consultar la tarjeta personalizada de Hot Wheels'}
    ]
  }
};
function openCatalog(key){
  var data=catalogData[key];
  if(!data)return;
  catalogTitle.textContent=data.title;
  catalogDescription.textContent=data.description;
  catalogItems.innerHTML=data.items.map(function(item){
    var message=encodeURIComponent('Hola Dani Detalles, '+item.msg+'. ¿Me compartes información y opciones?');
    var artwork=item.photo
      ? '<img class="catalog-art" src="'+item.photo+'" alt="'+item.name+'" loading="lazy">'
      : '<svg class="catalog-art" role="img" aria-label="'+item.name+'"><use href="#'+item.art+'"></use></svg>';
    return '<article class="catalog-item">'+artwork+'<div class="catalog-item-content"><h3>'+item.name+'</h3><p>'+item.desc+'</p><a class="btn" href="https://wa.me/573243066464?text='+message+'" target="_blank" rel="noopener">Consultar por WhatsApp</a></div></article>';
  }).join('');
  catalogModal.classList.add('open');
  catalogModal.setAttribute('aria-hidden','false');
  document.body.classList.add('catalog-open');
  catalogClose.focus();
}
function closeCatalog(){
  catalogModal.classList.remove('open');
  catalogModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('catalog-open');
}
document.querySelectorAll('[data-catalog]').forEach(function(button){
  button.addEventListener('click',function(){openCatalog(button.getAttribute('data-catalog'))});
});
catalogClose.addEventListener('click',closeCatalog);
catalogModal.addEventListener('click',function(event){if(event.target===catalogModal)closeCatalog()});
document.addEventListener('keydown',function(event){
  if(event.key==='Escape'&&catalogModal.classList.contains('open'))closeCatalog();
});

