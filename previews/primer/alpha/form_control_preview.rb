# frozen_string_literal: true

module Primer
  module Alpha
    # @label FormControl
    class FormControlPreview < ViewComponent::Preview
      # @param label text
      # @param caption text
      # @param validation_message text
      # @param required toggle
      # @param visually_hide_label toggle
      # @param full_width toggle
      def playground(
        label: "Best character",
        caption: "May the force be with you",
        validation_message: "Something went wrong",
        required: false,
        visually_hide_label: false,
        full_width: false
      )
        render_with_template(
          locals: {
            system_arguments: {
              label: label,
              caption: caption,
              validation_message: validation_message,
              required: required,
              visually_hide_label: visually_hide_label,
              full_width: full_width
            }
          }
        )
      end
    end
  end
end
