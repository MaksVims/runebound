{/* <h4>
      <strong>{{item.title}}</strong>
    </h4>

    <div class="card-item--content">
      <img :src="src" :alt="item.title" class="main-icon" />
      <div class="card-item-params">
        <p>Тип: {{item.type | translator}}</p>
        <p class="text-cost">
          Стоимость: {{item.cost }}
          <img src="/img/sprite/money.png" class="icon-money" />
        </p>
        <p v-if="item.marketValue" class="text-marketValue">
          Рыночная стоимость: {{item.marketValue}}
          <img
            src="/img/sprite/money.png"
            class="icon-money"
          />
        </p>
        <p v-if="item.ability" class="text-ability">
          + {{item.value}} 
          <img :src="getIconAbility" class="icon-ability" />
        </p>
      </div>
    </div>

    <div class="card-item--descr">
      <p v-if="item.description.length > 1">{{item.description}}</p>
      <p v-else>Описания нет</p>
    </div> */}

    filters: {
      translator(str) {
        switch (str) {
          case "weapon":
            return "Оружие";
          case "armor":
            return "Одежда";
          case "move":
            return "Передвижение";
          case "equipment":
            return "Снаряжение";
          case "goods":
            return "Товары";
        }
      }
    },

    getIconAbility() {
      switch (this.item.ability) {
        case "force":
          return "/img/sprite/force.png";
        case "move":
          return "/img/sprite/move.png";
        case "magic":
          return "/img/sprite/magic.png";
      }
    }

    .card-item--content {
      margin-top: 30px;
      display: flex;
      padding: 0px 30px;
    
      img.main-icon {
        width: 150px;
        height: 150px;
      }
    
      .card-item-params {
        margin-left: 20%;
      }
    
      .text-cost,
      .text-ability,
      .text-marketValue {
        display: flex;
        align-items: center;
      }
    }
    
    .card-item--descr {
      padding: 0px 30px;
    }