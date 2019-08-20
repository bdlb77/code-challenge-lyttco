require 'rails_helper'

RSpec.describe Reply, type: :model do
  context 'DB Columns' do 
    {
      message: :string,
      reply_to: :integer,
      short_name: :string,
    }.each do |attribute, type|
      it "should be created with a #{attribute}" do
        is_expected.to have_db_column(attribute).of_type type
      end
    end
  end

  context 'validations' do
    before do
      @session = Session.create(title: 'Session Example')
      @session2 = Session.create(title: 'Other Session')
      @message = Message.create(session: @session)
      @message2 = Message.create(session: @session2)
      @reply = Reply.create(session: @session, message: "Message", short_name: 'de.salutation')
    end

    it "should have option of having reply_to" do 
      expect(@reply).to be_valid
      @reply.reply_to = @message.identifier
      expect(@reply).to be_valid
    end
    %i[message short_name].each do |attribute, type|
      it "should have #{attribute} present" do
        is_expected.to validate_presence_of attribute
      end
    end
  end

end
