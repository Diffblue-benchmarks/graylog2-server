import AggregationWidget from '../aggregationbuilder/AggregationWidget';
import RemoveFromTableActionHandler from './RemoveFromTableActionHandler';
import MessagesWidget from '../widgets/MessagesWidget';
import MessagesWidgetConfig from '../widgets/MessagesWidgetConfig';

describe('RemoveFromTableActionHandler.condition', () => {
  it('enables action if field is presented in message table', () => {
    const widget = MessagesWidget.builder()
      .config(MessagesWidgetConfig.builder().fields(['foo']).build())
      .build();
    const context = { widget };

    const result = RemoveFromTableActionHandler.condition({ context, name: 'foo' });
    expect(result).toEqual(true);
  });
  it('enables action if field is presented in message table', () => {
    const widget = MessagesWidget.builder()
      .config(MessagesWidgetConfig.builder().build())
      .build();
    const context = { widget };

    const result = RemoveFromTableActionHandler.condition({ context, name: 'foo' });
    expect(result).toEqual(false);
  });
  it('checks properly for non message tables', () => {
    const widget = AggregationWidget.builder().build();
    const context = { widget };

    const result = RemoveFromTableActionHandler.condition({ context, name: 'foo' });
    expect(result).toEqual(false);
  });
});
