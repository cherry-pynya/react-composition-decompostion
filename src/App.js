import './App.css';

function App() {
  return (
    <div className="App">
      /** Родитель для блока новости */
      <News>
        /** Виджет который ренлерит новости по категориям переданным в пропс */
        <ToggleNews categories={['сейчас в сми', 'в германии', 'рекомендуем']}>
            /** Мапит список новостей по категории */
            <ToggleNewsLis news={[{}, {}, {}]} activeCategory={'сейчас в сми'} />
        </ToggleNews>
        /** Выводит данные с биржи */
        <NewsStockWidget />
      </News>
      /** Родитель для блока работа над ошибками, сделан по принципу карточек в бутсрапе */
      <SideWidget>
        {props.children}
      </SideWidget>
      /** Родитель для блока поиск */
      <Search >
        /** мапит список ссылокб которые переключают на выбранный сервис */
        <SearchService />
        /** Флорма поиска */
        <Form>
          <Logo />
          <Input />
          <button>найти</button>
        </Form>
        <SearcExample>
          <p>Найдется все</p>
          <SearcExampleLink text={'фаза луны'} />
        </SearcExample>
      </Search>
      /** банер с рекламой */
      <Banner />
      /** Родитель для предложенных ссылок*/
      <Links>
      /** список из списков */
        <ul>
          <li>
            <LinksWeather />
          </li>
          <li>
            <LinksVisited />
          </li>
          <li>
            <LinksMap />
          </li>
          <li>
            <LinksTV />
          </li>
          <li>
            <LinksStream />
          </li>
        </ul>
      </Links>
    </div>
  );
}

export default App;
